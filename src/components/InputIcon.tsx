import { InputHTMLAttributes, type JSX } from 'react';
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

export function InputIcon({
  IconLeft,
  IconRight,
  iconLeftClasses,
  iconRightClasses,
  className,
  ...props
}: InputIconProps) {
  return (
    <div
      className={cn(
        'relative flex items-center rounded-md bg-white',
        className
      )}
    >
      <Input
        {...props}
        className={clsx({
          'pl-9': IconLeft,
          'pr-9': IconRight
        })}
      />

      {IconLeft && (
        <IconLeft className={cn('absolute left-2.5 size-5', iconLeftClasses)} />
      )}

      {IconRight && (
        <IconRight
          className={cn('absolute right-2.5 size-5', iconRightClasses)}
        />
      )}
    </div>
  )
}
