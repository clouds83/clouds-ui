'use client'

import { useState, useEffect, useRef } from 'react'

interface CarouselItem {
  id: number
  imageUrl: string
}

interface InteractiveCarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: InteractiveCarouselProps) {
  const totalItems = items.length
  const extendedItems = [...items, ...items, ...items] // Clones before and after
  const [currentIndex, setCurrentIndex] = useState(totalItems) // Start in the middle
  const [isAnimating, setIsAnimating] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  // Drag states
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragOffsetX, setDragOffsetX] = useState(0)

  const trackRef = useRef<HTMLDivElement>(null)
  const cardWidth = 300

  // Handle click on next button
  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev + 1)
  }

  // Handle click on previous button
  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev - 1)
  }

  // Handle transition end to "teleport" when leaving the middle range
  const handleTransitionEnd = () => {
    if (currentIndex >= totalItems * 2) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex - totalItems)
    } else if (currentIndex < totalItems) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex + totalItems)
    } else {
      setIsAnimating(false)
    }
  }

  // Listen for transition end
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    el.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      el.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [currentIndex, totalItems])

  // Re-enable transition after teleporting
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true)
        setIsAnimating(false)
      })
    }
  }, [transitionEnabled])

  // --- DRAG LOGIC ---

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isAnimating) return
    e.currentTarget.setPointerCapture(e.pointerId)
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragOffsetX(0)
    setTransitionEnabled(false) // Disable transitions for direct movement
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX === null) return
    e.preventDefault() // Prevent text selection on desktop
    const offset = e.clientX - dragStartX
    setDragOffsetX(offset)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX === null) return
    e.currentTarget.releasePointerCapture(e.pointerId)
    setIsDragging(false)

    // Calculate how many cards we should shift
    const shift = -Math.round(dragOffsetX / cardWidth)
    /*
      Positive dragOffsetX => user pulled the carousel to the right => we need to go "previous".
      Negative dragOffsetX => user pulled to the left => we need to go "next".
      We invert it with '-' to match the direction in currentIndex.
    */

    setDragStartX(null)
    setDragOffsetX(0)

    // Snap if needed
    if (shift !== 0) {
      setIsAnimating(true)
      setTransitionEnabled(true) // Re-enable transition for the snap
      setCurrentIndex((prev) => prev + shift)
    } else {
      // If shift is 0, just snap back to current card with transition off -> on
      setTransitionEnabled(true)
    }
  }

  // Calculate the final translateX, including drag offset
  const translateX = -(currentIndex * cardWidth) + dragOffsetX

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      {/* Carousel Track */}
      <div
        ref={trackRef}
        // Use grab/grabbing cursor for a better drag UX
        className={`flex ${isDragging ? 'cursor-pointer' : 'cursor-pointer'}`}
        style={{
          transition: transitionEnabled ? 'transform 0.3s' : 'none',
          transform: `translateX(${translateX}px)`,
          width: `${extendedItems.length * cardWidth}px`
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${cardWidth}px`,
              height: '300px',
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons (centered below) */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="rounded bg-gray-700 px-3 py-1 text-white"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="rounded bg-gray-700 px-3 py-1 text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}
