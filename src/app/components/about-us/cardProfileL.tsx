import { Fade } from 'react-awesome-reveal'
import { useEffect, useState } from 'react'

function CardProfileL ({ name, role, description, src }: any) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener('resize', handleResize)

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobile) {
    // Versión móvil
    return (
      <Fade direction='left'>
        <div className="flex flex-col justify-start">
          <div className="flex justify-center items-center">
            {/* <img
              src={src}
              alt=""
              className="rounded-full w-[175px] h-[175px] object-cover"
            /> */}
          </div>
          <div className="border p-4 shadow-2xl rounded-xl">
            <div className="h-[100%] flex flex-col justify-center items-center">
              <span className="font-semibold lg:text-[40px] text-center">
                {name}
              </span>
              <span className="font-semibold lg:text-[25px] text-center">
                {role}
              </span>
            </div>
          </div>
        </div>
      </Fade>
    )
  }

  // Versión de escritorio
  return (
    <Fade direction='left'>
        <div className="flex justify-start">
          <div className="w-[1018.88px] h-[300px] border p-4 shadow-2xl rounded-xl">
            <div className="h-[100%] flex flex-col justify-center items-center">
              <span className="font-semibold text-[30px] 2xl:text-[40px] text-center">
                {name}
              </span>
              <span className="font-semibold text-[20px] 2xl:text-[25px] text-center">
                {role}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* <img
              src={src}
              alt=""
              className="rounded-full w-[175px] h-[175px] object-cover"
            /> */}
          </div>
        </div>
      </Fade>
  )
}

export default CardProfileL
