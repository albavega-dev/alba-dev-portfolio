import { useLayoutEffect } from 'react'
import SectionTitle from '../ui/SectionTitle'
import {
  consumeHomeIdentityTransition,
  isHomeIdentityTransitionPending,
} from '../layout/HomeIdentityTransitionSignal'

function Hero() {
  const shouldAnimateIdentity = isHomeIdentityTransitionPending()

  useLayoutEffect(() => {
    if (shouldAnimateIdentity) consumeHomeIdentityTransition()
  }, [shouldAnimateIdentity])

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
          titleClassName={shouldAnimateIdentity ? 'home-identity-enter' : undefined}
        />

        <style>{`
          @keyframes home-identity-enter {
            0% { transform: translateX(70px); }
            70% { transform: translateX(-6px); }
            86% { transform: translateX(2px); }
            100% { transform: translateX(0); }
          }

          .home-identity-enter {
            animation: home-identity-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          @media (prefers-reduced-motion: reduce) {
            .home-identity-enter { animation: none; }
          }
        `}</style>

        <div className="mx-auto mt-8 flex w-48 items-center justify-center gap-3">
          <span className="h-px flex-1 bg-[var(--color-pink)]" />

          <img
            src="/images/magical-star.png"
            alt=""
            aria-hidden="true"
            className="home-magical-star h-12 w-12 object-contain"
          />

          <span className="h-px flex-1 bg-[var(--color-pink)]" />
        </div>

        <p className="mt-6 text-base uppercase tracking-[0.25em] text-[var(--color-lavender)]">
          frontend · full-stack · <span className="font-[Caveat] text-lg font-medium uppercase">CREATIVE</span>
        </p>
      </div>
    </section>
  )
}

export default Hero
