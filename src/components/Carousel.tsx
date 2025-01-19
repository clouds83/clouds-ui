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
  // For infinite loop, create clones at front & back
  const fullItems = [...items, ...items, ...items]
  const middleIndexOffset = items.length // We'll jump here to re-center

  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState<number | null>(null)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [mouseTraveled, setMouseTraveled] = useState(0)
  const cardWidthRef = useRef<number>(300) // default; updated on mount

  // Keep track if we’ve already set the initial scroll to middle
  const didInitRef = useRef(false)

  // Positioning: move the scroll when user drags
  useEffect(() => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft = scrollLeft - mouseTraveled
  }, [scrollLeft, mouseTraveled])

  // On mount, measure card width & set the slider to the middle
  useEffect(() => {
    if (!sliderRef.current || didInitRef.current) return
    didInitRef.current = true

    // measure actual card width if needed
    const firstCard = sliderRef.current.querySelector(
      '.carousel-card'
    ) as HTMLElement
    if (firstCard) {
      cardWidthRef.current = firstCard.offsetWidth
    }

    // Move to the middle block
    const offset = items.length * cardWidthRef.current
    sliderRef.current.scrollLeft = offset
    setScrollLeft(offset)
  }, [items])

  // Attach global mousemove/mouseup listeners so that
  // drag continues even if cursor leaves slider
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDown || startX === null) return
      const offsetLeft = sliderRef.current?.offsetLeft ?? 0
      const currentMouseX = e.pageX - offsetLeft
      setMouseTraveled(currentMouseX - startX)
    }

    const handleGlobalMouseUp = () => {
      if (!isDown) return
      endDrag()
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('mouseup', handleGlobalMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDown, startX])

  // If we scroll too far left or right (in the cloned region),
  // jump seamlessly back to the real middle region.
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return
    const maxScroll = cardWidthRef.current * fullItems.length
    let x = sliderRef.current.scrollLeft
    const singleSetWidth = items.length * cardWidthRef.current

    // If scrolled left beyond the first block
    if (x < singleSetWidth * 0.5) {
      x += singleSetWidth
      sliderRef.current.scrollLeft = x
      setScrollLeft(x)
    }
    // If scrolled right beyond the second block
    else if (x > singleSetWidth * 1.5) {
      x -= singleSetWidth
      sliderRef.current.scrollLeft = x
      setScrollLeft(x)
    }
  }, [fullItems.length, items.length])

  // We’ll run the handleScroll on normal scrolling or after a drag
  useEffect(() => {
    handleScroll()
  }, [mouseTraveled, handleScroll])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return
    setIsDown(true)
    const offsetLeft = sliderRef.current.offsetLeft
    setStartX(e.pageX - offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
    setMouseTraveled(0)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return
    const touch = e.touches[0]
    if (!touch) return
    setIsDown(true)
    const offsetLeft = sliderRef.current.offsetLeft
    setStartX(touch.pageX - offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
    setMouseTraveled(0)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown || startX === null) return
    const touch = e.touches[0]
    if (!touch) return
    const offsetLeft = sliderRef.current?.offsetLeft ?? 0
    const currentMouseX = touch.pageX - offsetLeft
    setMouseTraveled(currentMouseX - startX)
  }

  const endDrag = () => {
    setIsDown(false)
    setStartX(null)
    // Snap alignment via CSS or manual logic
    // If you need a manual snap after drag:
    //   find the nearest item index => scroll to item boundary
  }

  // Move by 1 card with button clicks
  const scrollByOne = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return
    const newScroll =
      dir === 'left'
        ? sliderRef.current.scrollLeft - cardWidthRef.current
        : sliderRef.current.scrollLeft + cardWidthRef.current

    sliderRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
    setScrollLeft(newScroll)
  }

  return (
    <div className="relative mx-auto w-full p-4">
      <h2 className="mb-4 text-xl font-semibold">Infinite Carousel</h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className={`scroll-snap-type-x-mandatory relative flex select-none overflow-y-hidden overflow-x-scroll border bg-gray-200 ${isDown ? 'cursor-grabbing' : 'cursor-grab'} `}
        // Drag events
        onMouseDown={handleMouseDown}
        onMouseLeave={() => {
          if (isDown) endDrag()
        }}
        onMouseMove={(e) => e.preventDefault()} // prevent text selection
        onMouseUp={endDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={endDrag}
        onTouchCancel={endDrag}
        // If you want auto-snap after normal scrolling:
        onScroll={handleScroll}
        style={{
          whiteSpace: 'nowrap'
        }}
      >
        {fullItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`carousel-card scroll-snap-align-start relative inline-block h-[300px] w-[300px] flex-shrink-0 border-2 border-red-400 bg-black text-white`}
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-black/50 p-2">ID: {item.id}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => scrollByOne('left')}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Prev
        </button>
        <button
          onClick={() => scrollByOne('right')}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}
