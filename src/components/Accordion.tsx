'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { slugify, cn, clsx } from '@/utils'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface AccordionProps {
  title: string
  children: ReactNode
  isOpen: boolean
  setIsOpen: (slug: string) => void
  HeadingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  as?: 'div' | 'section' | 'article'
  className?: string
}

export function Accordion({
  title,
  children,
  HeadingTag = 'h3',
  as: WrapperTag = 'div',
  isOpen,
  setIsOpen,
  className
}: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState<string | number>('0')
  const slug = slugify(title)

  const toggleAccordion = (slug: string) => {
    if (isOpen) {
      setIsOpen('')
      return
    }

    setIsOpen(slug)
  }

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <WrapperTag className={cn('rounded-md border border-gray-200', className)}>
      <HeadingTag>
        <button
          onClick={() => toggleAccordion(slug)}
          aria-expanded={isOpen}
          aria-controls={`${slug}-content`}
          className={cn(
            'flex w-full items-center justify-between rounded-md p-4',
            'text-left font-medium text-gray-800',
            'outline-none ring-black focus-within:ring-2 active:ring-0',
            'transition-all duration-300 ease-in-out',
            {
              'hover:bg-gray-100': !isOpen,
              'ring-0 focus-within:ring-0': isOpen
            }
          )}
        >
          {title}
          <ChevronDownIcon
            className={clsx(
              'size-4 transform text-blue-500 transition-transform',
              {
                'scale-y-100': !isOpen,
                '-scale-y-100': isOpen
              }
            )}
          />
        </button>
      </HeadingTag>
      <div
        id={`${slug}-content`}
        role="region"
        ref={contentRef}
        className={clsx(
          'transition-max-height overflow-hidden duration-300 ease-in-out',
          {
            'max-h-0': !isOpen,
            'max-h-full': isOpen
          }
        )}
        style={{
          maxHeight: `${maxHeight}px`
        }}
      >
        <div className="p-4 pt-0 text-gray-600">{children}</div>
      </div>
    </WrapperTag>
  )
}
