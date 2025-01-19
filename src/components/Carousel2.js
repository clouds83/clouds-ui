'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export function Carousel2() {
  const slides = ['1', '2', '3', '4', '5', '6']

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        navigation
        loop
        slidesPerView="auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <div
              className="flex h-[300px] w-[300px] items-center justify-center"
              style={{ backgroundColor: `hsl(${index * 60}, 70%, 70%)` }}
            >
              Card {slide}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
