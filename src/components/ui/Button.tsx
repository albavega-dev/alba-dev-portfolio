import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors'

  const variantStyles =
    variant === 'primary'
      ? 'bg-[var(--color-purple)] text-white hover:bg-[var(--color-lavender)]'
      : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-purple)] hover:bg-[var(--color-lavender-soft)]'

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    />
  )
}

export default Button