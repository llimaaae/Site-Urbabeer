import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant =
  | 'caramelo'
  | 'terracota'
  | 'olive'
  | 'espresso'
  | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: ReactNode
}

export function Badge({ variant = 'caramelo', children, className = '', ...props }: BadgeProps) {
  const variantClasses = {
    caramelo: 'badge-caramelo',
    terracota: 'badge-terracota',
    olive: 'badge-olive',
    espresso: 'badge-espresso',
    outline: 'badge-outline',
  }[variant]

  return (
    <span {...props} className={`badge ${variantClasses} ${className}`}>
      {children}
    </span>
  )
}