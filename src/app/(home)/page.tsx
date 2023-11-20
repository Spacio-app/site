import Image from 'next/image'
import { auth } from 'auth'
const Landing = async () => {
  // const { data } = useSession()
  // console.log(data)
  const session = await auth()

  return (
    <>
      <section className='p-3 mx-auto'>
        {/* {
          session ? <p>{JSON.stringify(session)}</p> : <p>no hay sesion</p>
        } */}
        <div className='flex flex-col md:flex-row items-center mt-12'>
          <div className='center py-4'>
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
    </>
  )
}
export default Landing
