import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import cn from '../_utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
  size: 'xs' | 'sm' | 'md' | 'lg'
  roundness?:
    | 'rounded-none'
    | 'rounded-sm'
    | 'rounded'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-2xl'
    | 'rounded-full'
  Icon?: ReactNode
  iconRight?: boolean
  iconClass?: string
  className?: string
}

const defaultClasses =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50'

const componentVariants = {
  variant: {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-600',
    secondary: 'bg-yellow-400 text-black hover:bg-yellow-300 active:bg-yellow-400',
    outline: 'border border-gray-300 hover:bg-gray-100 active:bg-gray-200',
    ghost: 'bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-100',
    link: 'text-black underline-offset-4 hover:underline active:translate-y-0.5',
    destructive: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-600',
  },
  size: {
    xs: 'h-9 px-3 text-sm',
    sm: 'h-10 px-4',
    md: 'h-11 px-5',
    lg: 'h-12 px-6 text-lg',
  },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      roundness = 'rounded-md',
      Icon,
      children,
      iconRight,
      iconClass,
      className,
      ...props
    },
    ref
  ) => {
    const iconOnly = !children

    return (
      <button
        className={cn(
          defaultClasses,
          componentVariants.variant[variant],
          componentVariants.size[size],
          roundness,
          {
            ['flex-row-reverse']: iconRight,
            ['p-0 aspect-square']: iconOnly,
          },
          className
        )}
        ref={ref}
        {...props}>
        {Icon && <span className={cn(iconRight ? '-mr-1' : '-ml-1', { ['m-0']: iconOnly }, iconClass)}>{Icon}</span>}
        {children}
      </button>
    )
  }
)

export default Button
