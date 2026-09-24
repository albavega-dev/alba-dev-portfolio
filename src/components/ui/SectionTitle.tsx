type SectionTitleProps = {
  title: string
  description?: string
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <header>
      <h1 className="text-4xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </header>
  )
}

export default SectionTitle