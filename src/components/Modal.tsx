'use client'

import { ReactNode } from 'react'
import { clsx, cn } from '@/utils'
import { XMarkIcon } from '@heroicons/react/20/solid'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  closeButton?: boolean
}

const overlayClasses =
  'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'

const modalClasses =
  'bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative'

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  closeButton = true
}: ModalProps) {
  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
      <div className={cn(modalClasses, className)}>
        {closeButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}
