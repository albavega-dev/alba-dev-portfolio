type SectionTitleProps = {
  title: string
  description?: string
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <header>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-purple)] md:text-5xl">
        {title}
      </h1>
    
      {description && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}
    </header>
  )
}

export default SectionTitle