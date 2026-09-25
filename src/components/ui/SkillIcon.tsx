
type SkillIconProps = {
  name: string
  label: string
  iconUrl?: string
  hoverEffect?: 'underline' | 'circle' | 'circle-label' | 'circle-label-compact'
}

function SkillIcon({ name, label, iconUrl, hoverEffect = 'circle-label-compact' }: SkillIconProps) {
  const iconSource = iconUrl ?? `https://skillicons.dev/icons?i=${name}`
  const includesLabel = hoverEffect === 'circle-label' || hoverEffect === 'circle-label-compact'

  return (
    <div className={`group relative flex flex-col items-center gap-2 ${includesLabel ? 'mx-auto w-fit max-w-full' : ''}`}>
      <div
        className={`relative flex h-16 w-16 items-center justify-center bg-transparent ${
          hoverEffect === 'underline'
            ? 'transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none'
            : ''
        }`}
      >
        <img
          src={iconSource}
          alt={label}
          className="h-12 w-12 object-contain"
        />
        {hoverEffect === 'circle' && (
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-[var(--color-lavender)]"
          >
            <path
              d="M50.832 6.984 C33 -5 10 1 3 20 C-5 37 7 59 24 64 C45 72 65 54 63 36 C65 17 49 0 32 -1 C23 -2.2 12.92 0.92 5.43 7.06"
              pathLength="1"
              className="opacity-0 [stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset,opacity] duration-[240ms] ease-linear group-hover:opacity-100 group-hover:[stroke-dashoffset:0] motion-reduce:transition-none"
            />
          </svg>
        )}
      </div>

      <span className="relative text-sm text-[var(--color-text-secondary)]">
        {label}
        {hoverEffect === 'underline' && <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -bottom-2 left-0 h-2 w-full overflow-visible text-[var(--color-lavender)]"
        >
          <path
            d="M2 5 C20 2, 34 6, 51 4 S78 2, 98 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="1"
            className="opacity-0 [stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset,opacity] duration-300 ease-out group-hover:opacity-100 group-hover:[stroke-dashoffset:0] motion-reduce:transition-none"
          />
        </svg>}
      </span>
      {includesLabel && (
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 64 64"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`pointer-events-none absolute -left-5 w-[calc(100%+2.5rem)] overflow-visible text-[var(--color-lavender)] ${
            hoverEffect === 'circle-label-compact'
              ? '-top-1 h-[calc(100%+1rem)]'
              : '-top-3 h-[calc(100%+2rem)]'
          }`}
        >
          <path
            d="M48.5 7.5 Q46 3.3 41.944 1.408 C30 -4 10 1 3 20 C-5 37 7 59 24 64 C45 72 65 54 63 36 C65 17 49 0 32 -1 C25.7 -1.84 18.87 -0.56 12.77 2.38"
            pathLength="1"
            className="opacity-0 [stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset,opacity] duration-[240ms] ease-linear group-hover:opacity-100 group-hover:[stroke-dashoffset:0] motion-reduce:transition-none"
          />
        </svg>
      )}
    </div>
  )
}

export default SkillIcon