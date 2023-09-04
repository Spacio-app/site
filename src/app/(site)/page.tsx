'use client'

import Image from 'next/image'

const Landing = () => {
  return (
    <section className='w-3/4 mx-auto'>
      <div className='flex items-center mt-5'>
        <div className='flex-4 center py-4'>
          <Image
            className='rounded-full'
            src='https://production.listennotes.com/podcasts/inserte-aquí-inserte-aquí-Mnv9ZTrYR4S-a3tNkrLXfpT.1400x1400.jpg'
            alt='logo'
            height={500}
            width={500}
          />
        </div>
        <div className='flex-1 center text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'> Bienvenido a Spacio </h1>
          <h3> is Windy UI Well-documented?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi quidem laudantium ut in. Vero quia necessitatibus dolorum in quisquam magni cupiditate consectetur inventore reprehenderit repellat sit odio, ipsam pariatur!
          </p>
        </div>
      </div>
    </section>
  )
}
export default Landing
