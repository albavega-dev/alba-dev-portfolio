function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <div className="text-[var(--color-lavender)]" aria-hidden="true">
          🪽
        </div>

        <p className="text-sm text-[var(--color-text-secondary)]">
          © 2026 Alba Vega
        </p>
      </div>
    </footer>
  )
}

export default Footer