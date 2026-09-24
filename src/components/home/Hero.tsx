import SectionTitle from '../ui/SectionTitle'

function Hero() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/images/feather.svg"
            alt=""
            aria-hidden="true"
            className="feather-fall h-10 w-auto opacity-80"
          />
        </div>

        <SectionTitle
          title="Alba Vega"
          description="I build thoughtful web experiences where clean engineering meets expressive design."
        />

        <div className="mx-auto mt-8 flex w-48 items-center justify-center gap-3">
          <span className="h-px flex-1 bg-[var(--color-pink)]" />

          <span
            className="text-sm text-[var(--color-lavender)]"
            aria-hidden="true"
          >
            ✦
          </span>

          <span className="h-px flex-1 bg-[var(--color-pink)]" />
        </div>

        <p className="mt-6 text-base uppercase tracking-[0.25em] text-[var(--color-lavender)]">
          frontend · full-stack · creative
        </p>
      </div>
    </section>
  )
}

export default Hero