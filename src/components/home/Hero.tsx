import SectionTitle from '../ui/SectionTitle'

function Hero() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-6 flex justify-center text-[var(--color-lavender)]">
          <svg
            width="48"
            height="32"
            viewBox="0 0 48 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 20C10 11 17 8 24 16C31 8 38 11 44 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </div>
        <SectionTitle
          title="Alba Vega"
          description="I build thoughtful web experiences where clean engineering meets expressive design."
        />

        <div className="mx-auto mt-8 h-px w-24 bg-[var(--color-pink)]" />

        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[var(--color-lavender)]">
          frontend · full-stack · creative
        </p>
      </div>
    </section>
  )
}

export default Hero