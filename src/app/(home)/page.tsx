import Image from 'next/image'
import { auth } from 'auth'
const Landing = async () => {
  // const { data } = useSession()
  // console.log(data)
  const session = await auth()

  return (
    <>
      <section className='mx-auto background-img h-[calc(100vh-64px)]'>
        {/* {
          session ? <p>{JSON.stringify(session)}</p> : <p>no hay sesion</p>
        } */}
        <div className='flex flex-col md:flex-row items-center justify-center content-center px-10 h-full'>
          <div className='flex-1 py-4'>
            <Image
              className='wecome-img mx-auto'
              src='/test.png'
              alt='logo'
              height={550}
              width={550}
            />
          </div>
          <div className='flex-1 text-center text-white'>
            <div className='rounded-[40px] max-w-[700px] mx-auto p-16 flex flex-col gap-4'>
              <h1 className='text-7xl font-bold tracking-light'> SPACIO </h1>
              <h3 className='text-3xl font-semibold pb-4 border-b border-gray-100'> ¡Tu lugar Colaborativo! </h3>
              <p className='mt-4 text-md text-start'>
                La plataforma de Spacio es un ambicioso proyecto concebido con la finalidad de crear un espacio virtual colaborativo y enriquecedor destinado a estudiantes que deseen compartir, aprender y crecer juntos. Esta plataforma está diseñada para abarcar una variedad de tipos de contenido, como cursos, posts de información, documentos estudiantiles y más, con el objetivo de fomentar la colaboración y el intercambio de conocimientos entre los participantes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Landing
