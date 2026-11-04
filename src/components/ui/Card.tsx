import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export type CardVariant =
  | 'default'
  | 'elevated'
  | 'bordered'
  | 'espresso'

const variantClasses = {
  default: 'card',
  elevated: 'card-elevated',
  bordered: 'card-bordered',
  espresso: 'card-espresso',
} as const

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  interactive?: boolean
  href?: string
  target?: string
  rel?: string
  children: ReactNode
}

export function Card({
  variant = 'default',
  interactive = false,
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: CardProps) {
  const classNames = [
    variantClasses[variant],
    interactive ? 'card-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classNames} role="link" tabIndex={0} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

/* Sub-componentes para composição */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div {...props} className={`px-6 py-5 border-b border-divider ${className}`}>
      {children}
    </div>
  )
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardContent({ children, className = '', ...props }: CardContentProps) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <div {...props} className={`px-6 py-5 border-t border-divider bg-cream-50 rounded-b-xl ${className}`}>
      {children}
    </div>
  )
}

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

export function CardImage({ src, alt, width, height, priority = false, className = '', ...props }: CardImageProps) {
  return (
    <div {...props} className={`overflow-hidden rounded-t-xl ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  )
}