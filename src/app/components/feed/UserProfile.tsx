'use client'

import Image from 'next/image'

// Función para poder aplicar formato capitalize al nombre de usuario por defecto(cuenta duoc)

// function capitalizeWords (str) {
//   return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
// }

function UserProfile ({ author, createdAt }: any) {
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
      <div className="flex border-b border-gray-300 p-3.5">
        <a href="#" className="cursor-pointer">
          <Image
            width={50}
            height={50}
            src={author.photo}
            alt="FOTO"
            className="mr-3 border rounded-full w-[50px] h-fit"
          />
        </a>
        <div>
          <a href="#" className="cursor-pointer"><span className="font-bold">{author.name}</span></a>
          <p className="text-gray-400 text-sm">
            <span>Publicado hace {diffInDays > 0 ? (diffInDays === 1 ? `${diffInDays} dia` : `${diffInDays} dias`) : diffInHours > 0 ? (diffInHours === 1 ? `${diffInHours} hora` : `${diffInHours} horas`) : diffInMinutes > 0 ? (diffInMinutes === 1 ? `${diffInMinutes} minuto` : `${diffInMinutes} minutos`) : (diffInSeconds === 1 ? `${diffInSeconds} segundo` : `${diffInSeconds} segundos`)}</span>
          </p>
        </div>
      </div>
  )
}

export default UserProfile
