import { IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import { useLanguage } from '../../i18n/useLanguage'

function Footer() {
  const { translations } = useLanguage()
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 text-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          © 2026 Alba Vega
        </p>

        <div className="flex items-center gap-1" role="group" aria-label={translations.footer.contactLinks}>
          <a
            href="https://www.linkedin.com/in/alba-vega-calzado-7b976611a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={translations.footer.linkedinProfile}
            className="rounded-sm p-1.5 text-[var(--color-lavender)] transition-colors hover:text-[var(--color-purple)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pink)]"
          >
            <IconBrandLinkedin size={19} stroke={1.7} aria-hidden="true" />
          </a>
          <a
            href="mailto:avegac14@gmail.com"
            aria-label={translations.footer.email}
            className="rounded-sm p-1.5 text-[var(--color-lavender)] transition-colors hover:text-[var(--color-purple)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pink)]"
          >
            <IconMail size={19} stroke={1.7} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
