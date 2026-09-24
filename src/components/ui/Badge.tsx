type BadgeProps = {
  children: string
  className?: string
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        border border-[var(--color-border)]
        bg-[var(--color-lavender-soft)]
        px-3 py-1
        text-xs font-medium
        text-[var(--color-purple)]
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export default Badge