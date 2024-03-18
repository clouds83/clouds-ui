import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import mc from '../utils/mergeClasses'
import clsx from 'clsx'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-500',
        secondary: 'bg-yellow-400 text-black hover:bg-yellow-300 ring-yellow-500',
        outline: 'border border-gray-300 hover:bg-gray-100 ring-gray-300',
        ghost: 'bg-gray-100 text-black hover:bg-gray-200 ring-gray-300',
        link: 'text-black underline-offset-4 hover:underline ring-gray-300',
        destructive: 'bg-red-600 text-white hover:bg-red-500 ring-red-200',
      },
      size: {
        xs: 'h-9 px-3 text-sm',
        sm: 'h-10 px-4',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  Icon?: ReactNode
  pill?: boolean
  iconRight?: boolean
  iconClass?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, Icon, children, pill, iconRight, iconClass, ...props }, ref) => {
    return (
      <button
        className={mc(
          clsx(buttonVariants({ variant, size, className }), {
            ['rounded-full']: pill,
            ['flex-row-reverse']: iconRight,
          })
        )}
        ref={ref}
        {...props}>
        {Icon && <span className={mc(iconRight ? '-mr-1' : '-ml-2', { ['m-0']: !children }, iconClass)}>{Icon}</span>}
        {children}
      </button>
    )
  }
)

export default Button
