'use client'

import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import FormCourses from '@/components/forms/FormCourses'

export default function page () {
  return (
    <section className="pt-[7rem] pb-[2rem] bg-white-100">
      <div className="lg:mx-auto max-w-6xl lg:max-w-5xl p-2">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          initialSlide={1}
          effect={'coverflow'}
          loop={true}
          navigation={true}
          spaceBetween={10}
          slidesPerView={2}
          speed={2000}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: true
          }}
          className="coverflow"
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1
            },
            468: {
              spaceBetween: 10,
              slidesPerView: 2
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            1024: {
              spaceBetween: 15,
              slidesPerView: 2
            },
            1280: {
              spaceBetween: 30,
              slidesPerView: 2
            }
          }}
        >
          <SwiperSlide>
            <FormCourses />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
