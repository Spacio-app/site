'use client'

import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import FormCourses from '@/components/forms/FormCourses'
import FormTest from '@/components/forms/FormTest'
import { useSession } from 'next-auth/react'

export default function Page () {
  const session = useSession()

  const [swiper, setSwiper] = useState(null)

  const goToSlide = (index) => {
    if (swiper !== null) {
      swiper.slideTo(index)
    }
  }

  return (
    <section className="mt-10 pb-2">
      <div className='flex items-center justify-center flex-col md:flex-row gap-5 text-white font-semibold'>
        <button
          className='rounded-full bg-orange-400 p-2 min-w-[160px] hover:bg-orange-500 hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(0) }} // Ir al primer Slide (FormTest)
        >
          Crear Prueba
        </button>
        <button
          className='rounded-full bg-pink-400 p-2 min-w-[160px] hover:bg-pink-500 hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(1) }} // Ir al segundo Slide (FormCourses)
        >
          Crear Curso
        </button>
        <button
          className='rounded-full bg-purple-400 p-2 min-w-[160px] hover:bg-purple-500  hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(2) }} // Ir al tercer Slide (FormCourses)
        >
          Crear Documento
        </button>
        <button
          className='rounded-full bg-blue-400 p-2 min-w-[160px] hover:bg-blue-500  hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(3) }} // Ir al cuarto Slide (FormCourses)
        >
          Crear Publicación
        </button>
      </div>
      <div className="lg:mx-auto p-2 p-2 mt-4">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          initialSlide={1}
          effect={'coverflow'}
          // loop={true}
          // navigation={true}
          spaceBetween={10}
          slidesPerView={2}
          speed={1500}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: true
          }}
          className="coverflow"
          onSwiper={setSwiper}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1
            },
            468: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            1024: {
              spaceBetween: 60,
              slidesPerView: 1.2
            },
            1280: {
              spaceBetween: 70,
              slidesPerView: 1.2
            },
            1400: {
              spaceBetween: 80,
              slidesPerView: 1.2
            }
          }}
        >
          <SwiperSlide>
            <FormTest />
          </SwiperSlide>
          <SwiperSlide>
            <FormCourses session={session.data}/>
          </SwiperSlide>
          <SwiperSlide>
            <FormCourses session={session.data}/>
          </SwiperSlide>
          <SwiperSlide>
            <FormCourses session={session.data}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
