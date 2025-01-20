'use client'

interface CarouselItem {
  id: number
  imageUrl: string
}

interface InteractiveCarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: InteractiveCarouselProps) {
  return <div>Carousel</div>
}
