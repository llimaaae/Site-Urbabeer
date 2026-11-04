import type { InputHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  success?: boolean
}

export const Input = (({
  label,
  error,
  helperText,
  success,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const errorId = error ? `${inputId}-error` : undefined
  const helperId = helperText ? `${inputId}-helper` : undefined

  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined

  const inputClasses = [
    'input',
    error ? 'input-error' : '',
    success && !error ? 'input-success' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-text mb-2">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-danger" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="mt-1.5 text-sm text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  )
}) as ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>

Input.displayName = 'Input'