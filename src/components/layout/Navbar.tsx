import { useEffect, useRef, useState, type ReactNode } from 'react'
import { annotate } from 'rough-notation'
import { Link, NavLink, useLocation, useNavigate } from 'react-router'
import { armHomeIdentityTransition } from './HomeIdentityTransitionSignal'

type AnnotatedNavLinkProps = {
  to: string
  children: ReactNode
}

function AnnotatedNavLink({ to, children }: AnnotatedNavLinkProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const isActive = useLocation().pathname === to
  const shouldShow = isActive || isHovered || isFocused

  useEffect(() => {
    if (!textRef.current) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-pink-soft')
      .trim()

    annotationRef.current = annotate(textRef.current, {
      type: 'highlight',
      color: color || '#f3d6e5',
      padding: 4,
      strokeWidth: 1.5,
      iterations: 1,
      animate: !reducedMotion,
      animationDuration: 350,
    })

    return () => {
      annotationRef.current?.remove()
      annotationRef.current = null
    }
  }, [])

  useEffect(() => {
    const annotation = annotationRef.current
    if (!annotation) return

    if (shouldShow && !annotation.isShowing()) {
      annotation.show()
    } else if (!shouldShow && annotation.isShowing()) {
      annotation.hide()
    }
  }, [shouldShow])

  return (
    <NavLink
      to={to}
      className="group relative inline-flex items-center text-lg text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)] motion-reduce:transition-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <span ref={textRef} className="relative z-10">{children}</span>
    </NavLink>
  )
}

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isHomeExiting, setIsHomeExiting] = useState(false)

  return (
    <nav className="relative sticky top-0 z-50 bg-[var(--color-background)] px-6 py-4">
      <div className="relative flex min-h-9 w-full flex-wrap items-center justify-between gap-x-6 gap-y-2">
        {(location.pathname !== '/' || isHomeExiting) && (
          <Link
            to="/"
            className={`mr-4 font-[Fraunces] text-3xl font-medium text-[var(--color-purple)] ${isHomeExiting ? 'cv-navbar-identity-exit' : ''}`}
            onClick={(event) => {
              if (
                event.button === 0 &&
                !event.metaKey &&
                !event.ctrlKey &&
                !event.shiftKey &&
                !event.altKey
              ) {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
                event.preventDefault()
                armHomeIdentityTransition()
                setIsHomeExiting(true)
                requestAnimationFrame(() => navigate('/'))
              }
            }}
            onAnimationEnd={() => setIsHomeExiting(false)}
          >
            Alba Vega
          </Link>
        )}

        <div className="flex items-center gap-x-6 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <AnnotatedNavLink to="/about">About Me</AnnotatedNavLink>
          <AnnotatedNavLink to="/cv">CV</AnnotatedNavLink>
        </div>
      </div>

      <style>{`
        @keyframes cv-navbar-identity-exit {
          from { transform: translateX(0); }
          to { transform: translateX(-100vw); }
        }

        .cv-navbar-identity-exit {
          animation: cv-navbar-identity-exit 250ms cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .cv-navbar-identity-exit { animation: none; }
        }
      `}</style>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full"
        key={location.pathname}
        preserveAspectRatio="none"
        viewBox="0 0 100 2"
      >
        <style>{`
          @keyframes cv-navbar-divider-reveal {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          .cv-navbar-divider-mask {
            animation: cv-navbar-divider-reveal 1400ms ease-out forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .cv-navbar-divider-mask { animation: none; transform: scaleX(1); }
          }
        `}</style>
        <defs>
          <clipPath id="cv-navbar-divider-clip">
            <rect
              className="cv-navbar-divider-mask"
              x="0"
              y="0"
              width="100"
              height="2"
              style={{ transformOrigin: 'left center' }}
            />
          </clipPath>
        </defs>
        <path
          d="M0 1 C18 0.85 34 1.08 51 0.96 C68 0.84 84 1.1 100 0.94"
          clipPath="url(#cv-navbar-divider-clip)"
          fill="none"
          stroke="var(--color-lavender)"
          strokeDasharray="2.5 5"
          strokeLinecap="round"
          strokeWidth="0.65"
        />
      </svg>
    </nav>
  )
}

export default Navbar
