'use client'

import { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import cn from '@/utils/cn'

type ButtonProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'destructive'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  Icon?: ReactNode
  iconRight?: boolean
  iconClass?: string
  className?: string
  children?: ReactNode
  href?: string
}

const baseClasses = clsx(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-md font-medium transition-colors rounded-md',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-black',
  'disabled:pointer-events-none disabled:opacity-50',
)

const variantsClasses = {
  variant: {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-600',
    secondary:
      'bg-yellow-400 text-black hover:bg-yellow-300 active:bg-yellow-400',
    outline: 'border border-gray-300 hover:bg-gray-100 active:bg-gray-200',
    ghost: 'bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-100',
    link: 'text-black underline-offset-4 hover:underline active:translate-y-0.5',
    destructive: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-600',
  },
  size: {
    xs: 'h-9 px-4 text-xs',
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg',
  },
}

// TODO find a way to recove autocomplete
const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      Icon,
      children,
      iconRight,
      iconClass,
      className,
      href,
      ...props
    },
    ref,
  ) => {
    const Component = href ? 'a' : 'button'
    const iconOnly = !children

    return (
      <Component
        ref={ref as any}
        className={cn(
          baseClasses,
          variantsClasses.variant[variant],
          variantsClasses.size[size],
          {
            'flex-row-reverse': iconRight,
            'aspect-square p-0': iconOnly,
          },
          className,
        )}
        {...(href ? { href } : undefined)}
        {...props}
      >
        {Icon && (
          <span
            className={cn(
              iconRight ? '-mr-1' : '-ml-1',
              { ['m-0']: iconOnly },
              iconClass,
            )}
          >
            {Icon}
          </span>
        )}
        {children}
      </Component>
    )
  },
)

Button.displayName = 'Button'

export default Button
