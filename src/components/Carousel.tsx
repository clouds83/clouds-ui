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
  const [currentIndex, setCurrentIndex] = useState(items.length) // meio
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const trackRef = useRef<HTMLDivElement>(null)

  const totalItems = items.length
  const extendedItems = [...items, ...items, ...items] // clones

  // Quantas imagens cabem em tela
  const visibleImages = Math.floor(window.innerWidth / 300)

  const handleNext = () => {
    if (!transitionEnabled) return
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (!transitionEnabled) return
    setCurrentIndex((prev) => prev - 1)
  }

  // Quando a transição (CSS) termina, checamos se passamos dos limites
  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitionEnabled(false) // desabilita animação só pra "teleportar"

      if (currentIndex >= totalItems * 2) {
        setCurrentIndex(currentIndex - totalItems)
      } else if (currentIndex < totalItems) {
        setCurrentIndex(currentIndex + totalItems)
      }

      // Reabilita a animação no frame seguinte
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true)
        })
      })
    }

    const el = trackRef.current
    if (el) el.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      if (el) el.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [currentIndex, totalItems])

  const translateValue = -currentIndex * 300

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex"
        style={{
          transition: transitionEnabled ? 'transform 0.3s' : 'none',
          transform: `translateX(${translateValue}px)`,
          width: `${extendedItems.length * 300}px`
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              height: '300px',
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-gray-700 px-3 py-1 text-white"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-gray-700 px-3 py-1 text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  )
}
