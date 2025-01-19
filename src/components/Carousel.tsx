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
  const extendedItems = [...items, ...items, ...items] // Clonando os itens antes e depois
  const [currentIndex, setCurrentIndex] = useState(totalItems) // Iniciando no meio
  const [isAnimating, setIsAnimating] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const trackRef = useRef<HTMLDivElement>(null)

  // Função para avançar para o próximo item
  const handleNext = () => {
    if (isAnimating) return // Ignora cliques se uma animação estiver em andamento
    setIsAnimating(true)
    setCurrentIndex((prev) => prev + 1)
  }

  // Função para voltar para o item anterior
  const handlePrev = () => {
    if (isAnimating) return // Ignora cliques se uma animação estiver em andamento
    setIsAnimating(true)
    setCurrentIndex((prev) => prev - 1)
  }

  // Lida com o fim da transição (animação)
  const handleTransitionEnd = () => {
    // Verifica se precisamos teleportar para manter o loop infinito
    if (currentIndex >= totalItems * 2) {
      // Teleporta de volta para o meio
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex - totalItems)
    } else if (currentIndex < totalItems) {
      // Teleporta para a frente
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex + totalItems)
    } else {
      // Se não precisar teleportar, a animação terminou normalmente
      setIsAnimating(false)
    }
  }

  // Adiciona o listener para o evento de fim da transição
  useEffect(() => {
    const el = trackRef.current
    if (el) {
      el.addEventListener('transitionend', handleTransitionEnd)
    }

    return () => {
      if (el) {
        el.removeEventListener('transitionend', handleTransitionEnd)
      }
    }
  }, [currentIndex, totalItems])

  // Reabilita a transição após o teleport
  useEffect(() => {
    if (!transitionEnabled) {
      // Utiliza requestAnimationFrame para garantir que as mudanças de estilo sejam aplicadas na ordem correta
      const reenableTransition = () => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true)
          setIsAnimating(false)
        })
      }
      reenableTransition()
    }
  }, [transitionEnabled])

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      {/* Pista do Carrossel */}
      <div
        ref={trackRef}
        className="flex"
        style={{
          transition: transitionEnabled ? 'transform 0.3s' : 'none',
          transform: `translateX(-${currentIndex * 300}px)`,
          width: `${extendedItems.length * 300}px`
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
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

      {/* Botões de Navegação */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded bg-gray-700 px-3 py-1 text-white"
        onClick={handlePrev}
        disabled={isAnimating}
      >
        Prev
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded bg-gray-700 px-3 py-1 text-white"
        onClick={handleNext}
        disabled={isAnimating}
      >
        Next
      </button>
    </div>
  )
}
