'use client'

import { clsx, cn } from '@/utils'
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

type AlertProps = {
  variant?: 'neutral' | 'destructive' | 'warning' | 'info' | 'success'
  className?: string
  children?: React.ReactNode
  title: string
  HeadingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  onClose?: () => void
  isOpen?: boolean
  [key: string]: any
}

const baseClasses = clsx('relative w-full rounded-lg border p-4 flex gap-2')

const variantsClasses = {
  variant: {
    neutral: 'bg-white border-gray-300 [&>svg]:text-gray-600',
    destructive: 'bg-red-50 border-red-300 [&>svg]:text-red-600',
    warning: 'bg-yellow-50 border-yellow-400 [&>svg]:text-yellow-700',
    info: 'bg-blue-50 border-blue-300 [&>svg]:text-blue-600',
    success: 'bg-green-50 border-green-300 [&>svg]:text-green-700'
  }
}

export function Alert({
  className,
  variant = 'neutral',
  title,
  HeadingTag = 'h5',
  onClose,
  isOpen = true,
  children,
  ...props
}: AlertProps) {
  if (!isOpen) return null

  return (
    <div
      role="alert"
      className={cn(baseClasses, variantsClasses.variant[variant], className)}
      {...props}
    >
      <InformationCircleIcon className="size-4" />

      <div className="grid gap-2">
        <HeadingTag className={cn('font-medium leading-none tracking-tight')}>
          {title}
        </HeadingTag>

        {children}
      </div>

      {onClose && (
        <XMarkIcon
          className="absolute right-2 top-2 size-5 cursor-pointer"
          onClick={onClose}
        />
      )}
    </div>
  )
}
