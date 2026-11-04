import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize = 'default' | 'narrow' | 'wide' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  children: ReactNode
  noPadding?: boolean
}

export function Container({ size = 'default', children, noPadding = false, className = '', ...props }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-[1280px]',
    narrow: 'max-w-[960px]',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  }[size]

  const paddingClasses = noPadding
    ? ''
    : 'px-6 md:px-10 lg:px-16'

  return (
    <div
      {...props}
      className={`mx-auto w-full ${sizeClasses} ${paddingClasses} ${className}`}
    >
      {children}
    </div>
  )
}