import { InputHTMLAttributes, forwardRef } from 'react'
import cn from '../_utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  pill?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, pill, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50',
        className,
        { ['rounded-full']: pill }
      )}
      ref={ref}
      {...props}
    />
  )
})

export { Input }
