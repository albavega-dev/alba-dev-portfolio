import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card