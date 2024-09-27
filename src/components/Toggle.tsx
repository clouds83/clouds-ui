import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils'

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
}

const containerSize = {
  sm: 'w-6 p-[0.1875rem]',
  md: 'w-10 p-1',
  lg: 'w-12 p-1'
}

const circleSize = {
  sm: 'size-[0.625rem] peer-checked:ml-2',
  md: 'size-4 peer-checked:ml-4',
  lg: 'size-5 peer-checked:ml-5'
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative flex h-fit shrink-0 rounded-full bg-gray-400 transition-colors duration-300',
          'has-[:checked]:bg-blue-400 has-[:disabled]:opacity-50',
          containerSize[size]
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="peer absolute inset-0 z-10 cursor-pointer opacity-0 disabled:cursor-not-allowed"
          {...props}
        />

        <div
          className={cn(
            'size-4 appearance-none rounded-full bg-gray-100 checked:bg-white',
            'ml-0 transition-[margin] duration-300',
            circleSize[size]
          )}
        ></div>
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'

export { Toggle }
