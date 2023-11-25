'use client'

import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import FormCourses from '@/components/forms/FormCourses'
import FormTest from '@/components/forms/FormTest'
import FormPost from '@/components/forms/FormPost'
import { useSession } from 'next-auth/react'
export default function Page () {
  const session = useSession()

  return (
    <section className="mt-10 pb-2">
      <div className='flex items-center justify-center flex-col md:flex-row gap-5 text-white font-semibold'>
        <button className='rounded-full bg-orange-400 p-2 min-w-[160px] hover:bg-orange-500 hover:scale-105 transition duration-150 ease-in'>
          Crear Prueba
        </button>
        <button className='rounded-full bg-pink-400 p-2 min-w-[160px] hover:bg-pink-500 hover:scale-105 transition duration-150 ease-in'>
          Crear Curso
        </button>
        <button className='rounded-full bg-purple-400 p-2 min-w-[160px] hover:bg-purple-500  hover:scale-105 transition duration-150 ease-in'>
          Crear Documento
        </button>
        <button className='rounded-full bg-blue-400 p-2 min-w-[160px] hover:bg-blue-500  hover:scale-105 transition duration-150 ease-in'>
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
          allowTouchMove={false}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 20,
            slideShadows: true
          }}
          className="coverflow"
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
          <SwiperSlide className='min-h-[600px] bg-white border border-gray-200'>
            <FormTest />
          </SwiperSlide>
          <SwiperSlide className='min-h-[600px] bg-white border border-gray-200'>
            <FormCourses session={session.data}/>
          </SwiperSlide>
          <SwiperSlide className='min-h-[600px] bg-white border border-gray-200'>
            <FormPost session={session.data} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <FormCourses session={session.data}/>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  )
}
