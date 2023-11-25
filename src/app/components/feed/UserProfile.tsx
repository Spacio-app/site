'use client'

import Image from 'next/image'
import { useState } from 'react'

// Función para poder aplicar formato capitalize al nombre de usuario por defecto(cuenta duoc)

// function capitalizeWords (str) {
//   return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
// }

function UserProfile ({ author, createdAt, currentUser }: any) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const deletePost = () => {
    console.log('Publicación eliminada')
    setShowMenu(false)
    // lógica para borrar el post
  }

  // const diffInMilliseconds = new Date() - createdAt
  // const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))
  // Convertir la cadena createdAt a un objeto de fecha
  const createdAtDate = new Date(createdAt) as any

  // Calcular la diferencia en milisegundos
  const diffInMilliseconds = Date.now() - createdAtDate

  // Calcular la diferencia en días
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000)
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60))
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  return (
    <>
      <div className="flex border-b border-gray-300 p-3.5">
        <div className='flex w-[70%]'>
          <a href="#" className="cursor-pointer">
            <Image
              width={50}
              height={50}
              src={author.photo}
              alt="FOTO"
              className="mr-3 border rounded-full w-[40px] h-fit"
            />
          </a>
          <div className='text-sm'>
            <a href="#" className="cursor-pointer"><span className="font-bold">{author.name}</span></a>
            <p className="text-gray-400">
              <span>Publicado hace {diffInDays > 0 ? (diffInDays === 1 ? `${diffInDays} dia` : `${diffInDays} dias`) : diffInHours > 0 ? (diffInHours === 1 ? `${diffInHours} hora` : `${diffInHours} horas`) : diffInMinutes > 0 ? (diffInMinutes === 1 ? `${diffInMinutes} minuto` : `${diffInMinutes} minutos`) : (diffInSeconds === 1 ? `${diffInSeconds} segundo` : `${diffInSeconds} segundos`)}</span>
            </p>
          </div>
        </div>
        <div className='flex justify-end w-[30%] relative'>
          {currentUser && currentUser.id === author.id && (
            <button
              className={`transition-transform duration-300 ease-in-out transform ${showMenu ? 'rotate-90' : 'rotate-0'}`}
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#666666" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"/></svg>
            </button>
          )}
          {showMenu && currentUser && currentUser.id === author.id && (
            <div className="absolute right-0 top-[40px] mt-2 w-48 bg-white border rounded-md shadow-lg overflow-hidden transition-all duration-300 max-h-0 opacity-0 ease-in-out">
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={deletePost}>
                Eliminar publicación
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UserProfile
