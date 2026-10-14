import { useEffect, useRef, useState, type ReactNode } from 'react'
import { IconChevronDown, IconMenu2, IconX } from '@tabler/icons-react'
import { annotate } from 'rough-notation'
import { Link, NavLink, useLocation, useNavigate } from 'react-router'
import { armHomeIdentityTransition } from './HomeIdentityTransitionSignal'
import { useLanguage } from '../../i18n/useLanguage'

type AnnotatedNavLinkProps = {
  to: string
  children: ReactNode
  mobile?: boolean
  mobileOpen?: boolean
  onClick?: () => void
}

function AnnotatedNavLink({ to, children, mobile = false, mobileOpen = false, onClick }: AnnotatedNavLinkProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { language } = useLanguage()
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
  }, [language])

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
      onClick={onClick}
      tabIndex={mobile ? (mobileOpen ? 0 : -1) : undefined}
      className={({ isActive }) => `group relative inline-flex items-center text-lg text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)] motion-reduce:transition-none ${mobile ? 'w-full rounded-sm px-3 py-2' : ''} ${mobile && isActive ? 'bg-[var(--color-pink-soft)] text-[var(--color-purple)]' : ''}`}
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
  const { language, setLanguage, translations } = useLanguage()
  const [isHomeExiting, setIsHomeExiting] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuRendered, setIsMenuRendered] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isLanguageRendered, setIsLanguageRendered] = useState(false)
  const languageSelectorRef = useRef<HTMLDivElement>(null)
  const languageTriggerRef = useRef<HTMLButtonElement>(null)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Route changes can come from browser history as well as menu clicks.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }
    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuTriggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isLanguageOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!languageSelectorRef.current?.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false)
        languageTriggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLanguageOpen])

  const currentLanguageName = language === 'en' ? translations.navbar.english : translations.navbar.spanish
  const languageFlag = language === 'en' ? 'gb' : 'es'
  const languageTriggerLabel = `${translations.navbar.changeLanguage}. ${translations.navbar.currentLanguage}: ${currentLanguageName}`
  const availableLanguages = ['en', 'es'] as const
  const alternativeLanguages = availableLanguages.filter((option) => option !== language)

  return (
    <nav className="relative sticky top-0 z-50 bg-[var(--color-background)] px-2 py-4 md:px-6">
      <div className="relative flex min-h-9 w-full items-center justify-between gap-x-4 md:gap-x-6">
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

        <div className="hidden items-center gap-x-6 md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2">
          <AnnotatedNavLink to="/about">{translations.navbar.about}</AnnotatedNavLink>
          <AnnotatedNavLink to="/cv">{translations.navbar.cv}</AnnotatedNavLink>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-[16px]">
        <div ref={languageSelectorRef} className="relative z-50 h-10 w-16 origin-top rotate-[0.5deg] rounded-sm bg-[var(--color-lavender-soft)] p-1 shadow-[1px_2px_4px_rgba(105,84,119,0.14)] md:z-10 md:h-auto" role="group" aria-label={translations.navbar.languageLabel}>
            <button
              ref={languageTriggerRef}
              type="button"
              aria-label={languageTriggerLabel}
              aria-expanded={isLanguageOpen}
              aria-controls="navbar-language-options"
              onClick={() => {
                if (isLanguageOpen) {
                  setIsLanguageOpen(false)
                } else {
                  setIsLanguageRendered(true)
                  setIsLanguageOpen(true)
                }
              }}
              className="group flex w-full items-center justify-start gap-1 rounded-sm bg-transparent p-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple)]"
            >
              <span className="shrink-0 rounded-[2px] bg-white p-0.5 shadow-[1px_2px_4px_rgba(105,84,119,0.16)]">
                <img src={`/images/flags/${languageFlag}.svg`} alt="" aria-hidden="true" className="block h-[21px] w-7 rounded-[2px] object-cover" />
              </span>
              <IconChevronDown size={13} stroke={1.7} aria-hidden="true" className={`text-[var(--color-purple)] transition-transform group-hover:-translate-y-px motion-reduce:transition-none motion-reduce:transform-none ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

          <div
            id="navbar-language-options"
            hidden={!isLanguageRendered}
            aria-hidden={!isLanguageOpen}
            onAnimationEnd={() => {
              if (!isLanguageOpen) setIsLanguageRendered(false)
            }}
            className={`absolute right-0 top-full z-50 mt-[3px] w-full overflow-hidden rounded-sm bg-[var(--color-lavender-soft)] p-1 shadow-[1px_3px_8px_rgba(105,84,119,0.18)] md:static md:mt-0 md:w-auto md:rounded-none md:bg-[var(--color-lavender-soft)] md:p-0 md:shadow-none ${isLanguageOpen ? 'cv-mobile-language-dropdown--open' : 'cv-mobile-language-dropdown--closing'}`}
          >
            <div className="flex flex-col items-start gap-1 md:pt-1">
              {alternativeLanguages.map((option) => {
                const optionName = option === 'en' ? translations.navbar.english : translations.navbar.spanish
                const optionFlag = option === 'en' ? 'gb' : 'es'
                return (
                  <button
                    key={option}
                    type="button"
                    aria-label={optionName}
                    aria-pressed="false"
                    tabIndex={isLanguageOpen ? 0 : -1}
                    onClick={() => {
                      setLanguage(option)
                      setIsLanguageOpen(false)
                      languageTriggerRef.current?.focus()
                    }}
                    className="flex min-h-8 w-full items-center rounded-[2px] bg-transparent p-1 transition-[background-color,transform] focus-visible:bg-[var(--color-pink-soft)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-purple)] hover:bg-[var(--color-pink-soft)] hover:-translate-y-px motion-reduce:transform-none motion-reduce:transition-none md:inline-flex md:min-h-0 md:w-auto md:bg-transparent md:p-0.5 md:hover:bg-transparent md:focus-visible:bg-transparent"
                  >
                    <span className={`block shrink-0 rounded-[2px] bg-white p-0.5 shadow-[1px_2px_4px_rgba(105,84,119,0.16)] ${option === 'en' ? 'rotate-[-2deg]' : 'rotate-[2deg]'}`}>
                      <img src={`/images/flags/${optionFlag}.svg`} alt="" aria-hidden="true" className="block h-[21px] w-7 rounded-[2px] object-cover" />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <button
          ref={menuTriggerRef}
          type="button"
          aria-label={isMenuOpen ? translations.navbar.closeMenu : translations.navbar.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-mobile-menu"
          onClick={() => {
            if (isMenuOpen) {
              setIsMenuOpen(false)
            } else {
              setIsMenuRendered(true)
              setIsMenuOpen(true)
            }
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--color-lavender-soft)] text-[var(--color-purple)] shadow-[1px_2px_4px_rgba(105,84,119,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple)] md:hidden"
        >
          {isMenuOpen ? <IconX size={22} stroke={1.7} aria-hidden="true" /> : <IconMenu2 size={22} stroke={1.7} aria-hidden="true" />}
        </button>
        </div>
      </div>

      <div
        id="navbar-mobile-menu"
        hidden={!isMenuRendered}
        aria-hidden={!isMenuOpen}
        onAnimationEnd={() => {
          if (!isMenuOpen) setIsMenuRendered(false)
        }}
        className={`absolute left-0 right-0 top-full z-40 bg-[var(--color-background)] px-4 pb-4 pt-3 shadow-[0_5px_12px_rgba(105,84,119,0.12)] md:hidden ${isMenuOpen ? 'cv-mobile-menu--open' : 'cv-mobile-menu--closing'}`}
        role="navigation"
        aria-label={translations.navbar.navigationMenu}
      >
        <div className="flex flex-col gap-3">
          <AnnotatedNavLink to="/about" onClick={() => setIsMenuOpen(false)} mobile mobileOpen={isMenuOpen}>{translations.navbar.about}</AnnotatedNavLink>
          <AnnotatedNavLink to="/cv" onClick={() => setIsMenuOpen(false)} mobile mobileOpen={isMenuOpen}>{translations.navbar.cv}</AnnotatedNavLink>
        </div>
      </div>

      <style>{`
        @keyframes cv-mobile-language-open {
          from { opacity: 0; transform: translateY(-4px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes cv-mobile-language-close {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(-3px) scale(0.98); }
        }

        @keyframes cv-mobile-menu-open {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cv-mobile-menu-close {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-6px); }
        }

        @media (max-width: 767px) {
          .cv-mobile-language-dropdown--open {
            animation: cv-mobile-language-open 160ms ease-out both;
          }

          .cv-mobile-language-dropdown--closing {
            animation: cv-mobile-language-close 110ms ease-in both;
            pointer-events: none;
          }

          .cv-mobile-menu--open {
            animation: cv-mobile-menu-open 220ms ease-out both;
          }

          .cv-mobile-menu--closing {
            animation: cv-mobile-menu-close 140ms ease-in both;
            pointer-events: none;
          }
        }

        @media (min-width: 768px) {
          .cv-mobile-language-dropdown--closing {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cv-mobile-language-dropdown--open,
          .cv-mobile-language-dropdown--closing,
          .cv-mobile-menu--open,
          .cv-mobile-menu--closing {
            animation: none;
          }

          .cv-mobile-language-dropdown--closing {
            animation: none;
            display: none;
          }
        }

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
