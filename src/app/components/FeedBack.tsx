'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component'
import { useForm } from 'react-hook-form'
// import { useSession } from 'next-auth/client'

export const FeedBack = ({ contentID, session }: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const [rating, setRating] = useState(0)
  const [averageRating, setAverageRating] = useState<number>()
  const [ratingCount, setRatingCount] = useState()
  const { register, handleSubmit } = useForm()
  const onStarClick = (nextValue: any) => {
    setRating(nextValue)
  }
  const onSubmit = async (data: any) => {
    if (rating === 0) return
    console.log('rating', rating)
    console.log('data', data)
    console.log(session)
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
      const response = await fetch(`${apiBaseUrl}content/rate/${contentID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.accessToken}`,
          User: JSON.stringify(session?.user)
        },
        body: JSON.stringify({
          rating
        })
      })

      setRating(0)
      if (response) {
        const res = await response.json()
      }
    } catch (error) {
      if (error) {
        alert('Ya has calificado este contenido')
      }
      console.error('Error al calificar:', error)
    }
  }

  useEffect(() => {
    // Obtener la calificación promedio
    axios.get(`${apiBaseUrl}content/${contentID}/rating/average`)
      .then(response => {
        console.log('RESPONSE', response.data)
        setAverageRating(response.data)
      })
      .catch(error => {
        console.log(error.response)
        console.error('Error al obtener el promedio de calificaciones:', error)
      })

    // Obtener el conteo de calificaciones
    axios.get(`${apiBaseUrl}content/${contentID}/rating/count`)
      .then(response => {
        console.log('RESPONSE', response.data)
        setRatingCount(response.data)
      })
      .catch(error => {
        console.error('Error al obtener el conteo de calificaciones:', error)
      })
  }, [])

  return (
    <div className="lg:w-1/3 md:w-full border border-gray-500 rounded-2xl flex-grow">
      <div className="p-2">
        <h2 className="font-bold text-center">FeedBack</h2>
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center items-center'>
            <div className="w-[30%] justify-center items-center flex mt-2">mática
              <div className="shadow-lg border-l-2 rounded-2xl w-fit p-8">
              <p className="font-bold text-[28px]">
                {averageRating ? averageRating.toFixed(1) : 'N/A'}
              </p>
              </div>
            </div>
            <div className='text-[28px] h-fit flex w-[70%] justify-center items-center'>
              <div className='flex flex-col justify-center h-[60%] p-4'>
                <div className='h-[80%]'>
                  <StarRatingComponent
                    starCount={5}// Número de estrellas
                    value={rating} // Valor inicial
                    onStarClick={onStarClick} // Manejador de clics en las estrellas
                    {...register('rating')}
                  />
                </div>
                <div className='h-[20%]'>
                  <div className="p-2">
                    <p className="text-[15px]">{ratingCount ?? ratingCount} Calificaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <button type='submit' className="bg-blue-500 hover:bg-blue-400 text-white p-2 text-sm rounded-lg">
              Enviar Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
