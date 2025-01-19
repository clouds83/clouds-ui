'use client'
import React, { useEffect, useState, useRef, useCallback } from 'react'

interface CarouselItem {
  id: number
  imageUrl: string
}

interface InteractiveCarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: InteractiveCarouselProps) {
  const containerRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Mouse Event Handlers
  const onMouseDown = (e) => {
    // set scroll-snap-type = "none"
    containerRef.current.style.scrollSnapType = 'none'

    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1 // Multiplier for scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const onMouseUp = () => {
    // set scroll-snap-type = "y mandatory"
    containerRef.current.style.scrollSnapType = 'x mandatory'

    setIsDragging(false)
  }

  // Touch Event Handlers
  const onTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const onTouchMove = (e) => {
    if (!isDragging || !containerRef.current || !e.touches[0]) return

    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1 // Multiplier for scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const onTouchEnd = () => {
    setIsDragging(false)
  }

  // Attach and detach mouse event listeners to the window
  useEffect(() => {
    if (!containerRef.current) return

    if (isDragging) {
      containerRef.current.addEventListener('mousemove', onMouseMove)
      containerRef.current.addEventListener('mouseup', onMouseUp)
      containerRef.current.addEventListener('mouseleave', onMouseUp)
    } else {
      containerRef.current.removeEventListener('mousemove', onMouseMove)
      containerRef.current.removeEventListener('mouseup', onMouseUp)
      containerRef.current.removeEventListener('mouseleave', onMouseUp)
    }

    // Cleanup on unmount
    return () => {
      if (!containerRef.current) return

      containerRef.current.removeEventListener('mousemove', onMouseMove)
      containerRef.current.removeEventListener('mouseup', onMouseUp)
      containerRef.current.removeEventListener('mouseleave', onMouseUp)
    }
  }, [isDragging, onMouseMove, onMouseUp])

  return (
    <div className="relative mx-auto w-full">
      {/* Slider */}
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          overflowX: 'scroll',
          cursor: isDragging ? 'grabbing' : 'grab',
          // Optional: Hide scrollbar
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE 10+
        }}
        className={`no-scrollbar relative flex cursor-pointer select-none snap-x snap-mandatory gap-6 overflow-y-hidden overflow-x-scroll`}
      >
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`relative inline-block h-[300px] w-[300px] flex-shrink-0 snap-start bg-cover bg-center text-white`}
            style={{
              backgroundImage: `url(${item.imageUrl})`
            }}
          >
            <div className="bg-black/50 p-2">ID: {item.id}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => {}}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Prev
        </button>
        <button
          onClick={() => {}}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}
