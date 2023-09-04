'use client'

import Image from 'next/image'

const Landing = () => {
  return (
    <section className='w-3/4 mx-auto'>
      <div className='flex items-center mt-12 pt-12'>
        <div className='flex-4 center py-4'>
          <Image
            className='wecome-img'
            src='/community.svg'
            alt='logo'
            height={450}
            width={450}
          />
        </div>
        <div className='flex-1 center text-center'>
          <h1 className='text-4xl font-bold tracking-tight mb-5'> Bienvenido a Spacio </h1>
          {/* <h3 className='mt-1 mb-1 text-xl font-semibold'> ¿Quienes somos?</h3> */}
          <p>
            La plataforma de Spacio es un ambicioso proyecto concebido con la finalidad de crear un espacio virtual colaborativo y enriquecedor destinado a estudiantes que deseen compartir, aprender y crecer juntos. Esta plataforma está diseñada para abarcar una variedad de tipos de contenido, como cursos, posts de información, documentos estudiantiles y más, con el objetivo de fomentar la colaboración y el intercambio de conocimientos entre los participantes.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Landing
