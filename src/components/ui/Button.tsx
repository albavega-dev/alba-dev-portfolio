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
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors'

  const variantStyles =
    variant === 'primary'
      ? 'bg-gray-900 text-white hover:bg-gray-700'
      : 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100'

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    />
  )
}

export default Button