import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-background)] px-6 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <Link
          to="/"
          className="mr-4 font-serif text-lg font-medium tracking-wide text-[var(--color-purple)]"
        >
          Alba Vega
        </Link>

        <Link
          to="/about"
          className="text-base text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
        >
          About
        </Link>

        <Link
          to="/experience"
          className="text-base text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
        >
          Experience
        </Link>

        <Link
          to="/projects"
          className="text-base text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
        >
          Projects
        </Link>

        <Link
          to="/ui-lab"
          className="text-base text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
        >
          UI Lab
        </Link>

        <Link
          to="/cv"
          className="text-base text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
        >
          CV
        </Link>

        <Link
          to="/contact"
          className="text-base text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar