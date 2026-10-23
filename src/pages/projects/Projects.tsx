import { useState } from 'react'
import PageContainer from '../../components/layout/PageContainer'
import { useLanguage } from '../../i18n/useLanguage'

function ProjectTitleLink() {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [prefersReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const isVisible = isHovered || isFocused

  return (
    <a
      href="https://arknightsiberia.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="rounded-sm text-[var(--color-purple)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
    >
      <span className="relative z-10 inline-block">
        Arknights Iberia
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-0 h-2 w-full overflow-visible"
          viewBox="0 0 220 12"
          preserveAspectRatio="none"
        >
          <path
            d="M2 7 C42 10, 77 3, 112 6 S178 9, 218 4"
            fill="none"
            stroke="var(--color-pink-soft)"
            strokeLinecap="round"
            strokeWidth="2.5"
            pathLength="1"
            style={{
              strokeDasharray: 1,
              strokeDashoffset: isVisible || prefersReducedMotion ? 0 : 1,
              transition: prefersReducedMotion ? 'none' : 'stroke-dashoffset 350ms ease-out',
            }}
          />
        </svg>
      </span>
    </a>
  )
}

function Projects() {
  const { translations } = useLanguage()
  const project = translations.projects

  return (
    <PageContainer className="py-12 md:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="mt-2 font-[Fraunces] text-4xl font-medium text-[var(--color-purple)] md:text-5xl">{project.heading}</h1>
      </header>

      <article className="mx-auto mt-12 max-w-5xl rotate-[-0.5deg] overflow-hidden border border-dashed border-[var(--color-lavender)] bg-[var(--color-surface)] p-6 pb-8 shadow-[-4px_5px_0_rgba(185,165,214,0.18)] md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div className="flex min-w-0 items-center justify-center">
            <div className="relative w-full max-w-xl rotate-[-1deg] bg-white p-3 shadow-[4px_6px_18px_rgba(185,165,214,0.25)] md:rotate-[-2deg]">
              <img src="/images/arknights-iberia-catalogue.png" alt={project.imageAlt} className="block h-auto w-full" />
              <div aria-hidden="true" className="pointer-events-none absolute -top-4 left-1/2 z-10 h-8 w-28 -translate-x-1/2">
                <div
                  className="h-full w-full bg-[var(--color-pink)] opacity-75 drop-shadow-[1px_2px_2px_rgba(120,80,100,0.15)]"
                  style={{
                    clipPath: 'polygon(0% 0%, 97% 0%, 100% 12%, 97% 23%, 100% 35%, 97% 48%, 100% 60%, 97% 73%, 100% 85%, 97% 100%, 0% 100%, 3% 88%, 0% 75%, 3% 62%, 0% 50%, 3% 38%, 0% 25%, 3% 12%)',
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 2px, transparent 2px, transparent 5px)',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="md:-translate-y-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="font-[Fraunces] text-3xl font-medium text-[var(--color-purple)]">
                <ProjectTitleLink />
              </h2>
              <span className="font-[Caveat] text-3xl font-medium text-[var(--color-pink)]">{project.status}</span>
            </div>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[var(--color-lavender)] text-[.82rem] tracking-[.04em]" aria-label={project.technologiesLabel}>
              {['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'].map((technology, index) => (
                <span key={technology} className="inline-flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageContainer>
  )
}

export default Projects
