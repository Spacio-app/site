'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component'
import { useForm } from 'react-hook-form'
// import { useSession } from 'next-auth/client'

export const FeedBack = ({ contentID, session }: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const [rating, setRating] = useState(0)
  const [averageRating, setAverageRating] = useState(null)
  const [ratingCount, setRatingCount] = useState(null)
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
      console.error('Error al calificar:', error)
    }
  }

  useEffect(() => {
    // Obtener la calificación promedio
    axios.get(`${apiBaseUrl}content/${contentID}/rating/average`)
      .then(response => {
        console.log('RESPONSE', response.data)
        setAverageRating(response.data.average)
      })
      .catch(error => {
        console.log(error.response)
        console.error('Error al obtener el promedio de calificaciones:', error)
      })

    // Obtener el conteo de calificaciones
    axios.get(`${apiBaseUrl}content/${contentID}/rating/count`)
      .then(response => {
        setRatingCount(response.data.count)
      })
      .catch(error => {
        console.error('Error al obtener el conteo de calificaciones:', error)
      })
  }, [contentID, apiBaseUrl])

  return (
    <div className="lg:w-1/3 md:w-full border border-gray-500 rounded-2xl flex-grow">
      <div className="p-6">
        <h2 className="font-bold">Deja tu FeedBack!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StarRatingComponent
            starCount={5}// Número de estrellas
            value={rating} // Valor inicial
            onStarClick={onStarClick} // Manejador de clics en las estrellas
            {...register('rating')}
          />
          <button type='submit' className="bg-blue-500 text-white px-4 py-2 mt-4">
            Enviar Feedback
          </button>
        </form>
      </div>
      <div className="w-[100%] items-center flex p-3">
        <div className="shadow-lg border-l-2 rounded-2xl w-fit p-11">
          <p className="font-bold text-3xl">{averageRating ?? averageRating}</p>
        </div>
        <div className="ml-6">Puntaje</div>
      </div>
      <div className="p-3">
        <p className="font-bold">Número de Calificaciones: {ratingCount ?? ratingCount}</p>
      </div>
    </div>
  )
}
