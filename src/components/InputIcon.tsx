import { InputHTMLAttributes, forwardRef } from 'react'
import { cn, clsx } from '@/utils'
import { Input } from '@/components'

export interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  IconLeft?: JSX.ElementType
  IconRight?: JSX.ElementType
  iconLeftClasses?: string
  iconRightClasses?: string
  className?: string
  type?: 'text' | 'password' | 'email' | 'number'
  error?: boolean
  valid?: boolean
}

const InputIcon = forwardRef<HTMLInputElement, InputIconProps>(
  (
    {
      IconLeft,
      IconRight,
      iconLeftClasses,
      iconRightClasses,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'relative flex items-center rounded-md bg-white',
          className
        )}
        ref={ref}
      >
        <Input
          {...props}
          className={clsx({
            'pl-9': IconLeft,
            'pr-9': IconRight
          })}
        />

        {IconLeft && (
          <IconLeft
            className={cn('absolute left-2.5 size-5', iconLeftClasses)}
          />
        )}

        {IconRight && (
          <IconRight
            className={cn('absolute right-2.5 size-5', iconRightClasses)}
          />
        )}
      </div>
    )
  }
)

export { InputIcon }
