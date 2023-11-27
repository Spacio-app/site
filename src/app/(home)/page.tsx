import Image from 'next/image'
import { auth } from 'auth'
import Header from './header'
const Landing = async () => {
  // const { data } = useSession()
  // console.log(data)
  const session = await auth()

  return (
    <>
      <Header className={'bg-transparent z-[1] top-0'} sessionData={session} />
      <video autoPlay muted loop className='absolute top-0 z-[-1] w-full h-full lg:h-[calc(100vh)] object-cover'>
        <source src="/prueba.mkv" type="video/mp4" />
      </video>
      <section className='relative mx-auto h-full lg:h-[calc(100vh-64px)] flex justify-center items-center'>
        {/* {
          session ? <p>{JSON.stringify(session)}</p> : <p>no hay sesion</p>
        } */}
        <div className='w-full h-full flex flex-col-reverse lg:flex-row lg:max-w-[80%] xl:max-w-[70%] items-center justify-start lg:justify-center lg:gap-10'>
          <div className=' bg-black lg:bg-transparent w-full h-auto'>
            <Image
              className='w-auto lg:w-[500px] mx-auto object-cover rounded-[20px]'
              src='/test.png'
              alt='logo'
              height={1000}
              width={500}
            />
          </div>
          <div className='w-[100%] flex flex-col justify-center items-center relative text-center py-10 text-white'>
            {/* <div className='absolute z-10 w-full rounded-[108px] min-h-full bg-gray-400 fill-white mix-blend-multiply'>
            </div> */}
            <div className='relative z-20 rounded-[40px] mx-auto p-8 flex flex-col items-center gap-4'>
              <h1 className='text-7xl font-bold tracking-light text-[#037AF6]'> SPACIO </h1>
              <h3 className='text-3xl font-semibold pb-4 border-b border-gray-100'> ¡Tu lugar Colaborativo! </h3>
              <p className='mt-4 text-lg text-center text-wrap-balance'>
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
