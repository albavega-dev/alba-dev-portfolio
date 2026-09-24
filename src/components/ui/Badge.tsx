type BadgeProps = {
  children: string
  className?: string
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge