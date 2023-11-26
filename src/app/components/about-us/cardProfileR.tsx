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
      <Fade direction='right'>
        <div className="flex flex-col justify-start">
          <div className="flex justify-center items-center">
            <img
              src={src}
              alt=""
              className="rounded-full w-[30%]"
            />
          </div>
          <div className="border p-4 shadow-2xl rounded-xl">
            <div className="h-[50%] flex flex-col justify-center items-center border-b border-gray-400">
              <span className="font-semibold lg:text-[40px] text-center">
                {name}
              </span>
              <span className="font-semibold lg:text-[25px] text-center">
                {role}
              </span>
            </div>
            <div className="h-[50%] flex justify-center items-center">
              <p className="w-[80%] text-center md:text-base text-sm">
                <span className="mr-2 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#666666" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179Z"/></svg>
                </span>
                {description}
                <span className="ml-2 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#666666" d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311c-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179Zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621c-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179Z"/></svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    )
  }

  // Versión de escritorio
  return (
    <Fade direction='right'>
        <div className="flex justify-start">
          <div className="flex justify-center items-center">
            <img
              src={src}
              alt=""
              className="rounded-full w-[40%]"
            />
          </div>
          <div className="w-[1018.88px] h-[300px] border p-4 shadow-2xl rounded-xl">
            <div className="h-[50%] flex flex-col justify-center items-center border-b border-gray-400">
              <span className="font-semibold text-[30px] 2xl:text-[40px] text-center">
                {name}
              </span>
              <span className="font-semibold text-[20px] 2xl:text-[25px] text-center">
                {role}
              </span>
            </div>
            <div className="h-[50%] flex justify-center items-center">
              <p className="w-[80%] text-center text-md 2xl:text-base">
                <span className="mr-2 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#666666" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179Z"/></svg>
                </span>
                {description}
                <span className="ml-2 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#666666" d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311c-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179Zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621c-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179Z"/></svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Fade>
  )
}

export default CardProfileL
