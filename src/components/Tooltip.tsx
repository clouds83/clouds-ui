import { ReactNode } from 'react'
import { cn } from '@/utils'

interface TooltipProps {
  id?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children: ReactNode
  className?: string
}

export function Tooltip({
  id,
  position = 'top',
  children,
  className
}: TooltipProps) {
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  }

  return (
    <div
      id={id}
      className={cn(
        'pointer-events-none absolute z-10 w-max max-w-xs rounded-md bg-black p-2 text-sm text-white opacity-0 transition-opacity duration-200',
        positionClasses[position],
        'group-hover:opacity-100',
        className
      )}
      role="tooltip"
    >
      {children}
    </div>
  )
}
