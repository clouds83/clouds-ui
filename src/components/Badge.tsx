import { HTMLAttributes } from 'react'
import { cn, clsx } from '@/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'neutral' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

const baseClasses = clsx(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold h-fit'
)

const badgeVariants = {
  variant: {
    default: 'border-blue-200 bg-blue-50',
    neutral: 'border-gray-200 bg-gray-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-yellow-300 bg-yellow-50',
    error: 'border-red-200 bg-red-50'
  },
  size: {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-sm'
  }
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot,
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      role="status"
      className={cn(
        baseClasses,
        badgeVariants.variant[variant],
        badgeVariants.size[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('size-1.5 rounded-full', {
            'bg-blue-400': variant === 'default',
            'bg-gray-500': variant === 'neutral',
            'bg-green-400': variant === 'success',
            'bg-yellow-500': variant === 'warning',
            'bg-red-500': variant === 'error',
            '-ml-0.5 mr-1': size === 'sm',
            '-ml-1 mr-1.5': size === 'md',
            '-ml-1.5 mr-2': size === 'lg'
          })}
        />
      )}
      {children}
    </div>
  )
}
