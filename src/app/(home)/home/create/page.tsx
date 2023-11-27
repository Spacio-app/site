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
import FormFile from '@/components/forms/FormFile'
import FormPost from '@/components/forms/FormPost'

export default function Page () {
  const session = useSession()

  const [swiper, setSwiper] = useState(null)

  const goToSlide = (index: number) => {
    if (swiper !== null) {
      (swiper as any).slideTo(index)
    }
  }

  return (
    <section className="mt-10 pb-2">
      <div className='flex items-center justify-center gap-5 text-white font-semibold'>
        <button
          className='rounded-full bg-orange-400 p-2 min-w-[45px] md:rounded-full md:bg-orange-400 md:p-2 md:min-w-[160px] hover:bg-orange-500 hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(0) }} // Ir al primer Slide (FormTest)
        >
          <span className="hidden md:inline">Crear Prueba</span>
          <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#ffffff" fillRule="evenodd" d="M39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3Zm3 7h-6v16.5l3 4.5l3-4.5V20ZM6 9v30a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3Zm14 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-9-3v3h3v-3h-3Zm-1-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Zm6.707-10.293a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414l4.707-4.707Z" clipRule="evenodd"/></svg></span>
        </button>
        <button
          className='rounded-full bg-pink-400 p-2 min-w-[45px] md:rounded-full md:bg-pink-400 md:p-2 md:min-w-[160px] hover:bg-pink-500 hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(1) }} // Ir al segundo Slide (FormCourses)
        >
          <span className="hidden md:inline">Crear Curso</span>
          <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg></span>
        </button>
        <button
          className='rounded-full bg-purple-400 p-2 min-w-[45px] md:rounded-full md:bg-purple-400 md:p-2 md:min-w-[160px] hover:bg-purple-500 hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(2) }} // Ir al tercer Slide (FormCourses)
        >
          <span className="hidden md:inline">Crear Documento</span>
          <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM9 9h1m-1 4h6m-6 4h6"/></g></svg></span>
        </button>
        <button
          className='rounded-full bg-blue-400 p-2 min-w-[45px] md:rounded-full md:bg-blue-400 md:p-2 md:min-w-[160px] hover:bg-blue-500 hover:scale-105 transition duration-150 ease-in'
          onClick={() => { goToSlide(3) }} // Ir al cuarto Slide (FormCourses)
        >
          <span className="hidden md:inline">Crear Publicación</span>
          <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 3v18h18V3H3m15 15H6v-1h12v1m0-2H6v-1h12v1m0-4H6V6h12v6Z"/></svg></span>
        </button>
      </div>
      <div className="lg:mx-auto p-2 mt-4">
      <Swiper
          modules={[EffectCoverflow, Navigation]}
          initialSlide={1}
          effect={'coverflow'}
          // loop={true}
          // navigation={true}
          spaceBetween={10}
          slidesPerView={2}
          allowTouchMove={false}
          speed={1500}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 20,
            slideShadows: true
          }}
          className="coverflow"
          onSwiper={setSwiper as any}
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
          <SwiperSlide className='bg-white'>
            <div className='h-[calc(100vh-190px)] border border-gray-200 overflow-auto'>
              <FormTest session={session.data}/>
            </div>
          </SwiperSlide>
          <SwiperSlide className='min-h-[600px] bg-white'>
            <div className='h-[calc(100vh-200px)] border border-gray-200 overflow-auto'>
              <FormCourses session={session.data}/>
            </div>
          </SwiperSlide>
          <SwiperSlide className='min-h-[600px] bg-white'>
            <div className='h-[calc(100vh-200px)] border border-gray-200 overflow-auto'>
              <FormFile session={session.data}/>
            </div>
          </SwiperSlide>
          <SwiperSlide className='min-h-[600px] bg-white'>
            <div className='h-[calc(100vh-200px)] border border-gray-200 overflow-auto'>
              <FormPost session={session.data}/>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  )
}
