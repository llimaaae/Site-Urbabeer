import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outline'
  | 'terracota'
  | 'espresso'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

type AnchorOnlyProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'download'> & Record<string, unknown>

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  as?: 'a' | 'button'
  href?: string
  target?: string
  rel?: string
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  as,
  href,
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const classNames = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'w-full' : '',
    loading ? 'btn-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const ariaProps = {
    'aria-busy': loading,
    'aria-disabled': loading || disabled,
  }

  // Renderiza como anchor (herda props seguras de link, sem props de button)
  if (href || as === 'a') {
    const { type: _t, form: _f, formAction: _fa, formEncType: _fe, formMethod: _fm, formNoValidate: _fnv, formTarget: _ft, ...linkProps } = props as AnchorOnlyProps
    return (
      <a
        className={classNames}
        href={href}
        {...ariaProps}
        {...(linkProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  const { target: _target, rel: _rel, ...buttonProps } = props as Record<string, unknown>

  return (
    <button
      type="button"
      className={classNames}
      disabled={loading || disabled}
      {...ariaProps}
      {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}