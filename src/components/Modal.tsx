'use client'

import { ReactNode, useRef, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { cn } from '@/utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  closeButton?: boolean
}

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  closeButton = true
}: ModalProps) {
  if (!isOpen) return null

  const modalRef = useRef<HTMLDivElement>(null)

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    if (modalRef.current) {
      modalRef.current.focus()
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Modal"
      tabIndex={-1}
    >
      <div
        className={cn(
          'relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg focus:outline-none',
          className
        )}
      >
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
