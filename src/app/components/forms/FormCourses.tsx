'use client'

import React, { useState } from 'react'
import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import axios from 'axios'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import ProgressBar from './ProgressBar'

const FormCourses = ({ session }: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [message, setMessage] = useState('')

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      videos: [{ title: '', desc: '', url: '' }],
      createAnnouncement: false
    },
    mode: 'onBlur'
  })

  const { fields, append, remove } = useFieldArray({
    name: 'videos',
    control
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true)
    setUploadProgress(0)

    data.videos.map((video: any) => {
      return (video.url = video.url[0])
    })

    console.log(data)

    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.accessToken}`,
      User: JSON.stringify(session?.user)
    }

    try {
      const response = await axios.post(`${apiBaseUrl}/contentCourse`, data, {
        headers,
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total?.valueOf() ?? 1 // Valor predeterminado a 1 si total es undefined
          const progress = Math.round((progressEvent.loaded / total) * 100)
          setUploadProgress(progress)
        }
      })

      console.log(response.data)
      setMessage('¡Curso creado con éxito!')
    } catch (error) {
      console.error(error)
      setMessage('Error al crear el curso')
    } finally {
      setLoading(false)
      // Espera 1 segundo antes de restablecer el progreso
      setTimeout(() => {
        setUploadProgress(0)
      }, 1000)
    }
  }

  return (
    <div className='bg-white flex flex-col justify-center items-center gap-10 min-w[auto] min-h[auto] lg:min-w[1200px]'>
        <div className="border-b text-xl font-semibold text-center py-4 w-full">
          <h2>Crear Curso</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-auto min-w-auto lg:min-w-[400px]'>
                    <div className="mb-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Titulo del Curso
                        </label>
                        <input
                            type="textarea"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register('title', { required: true })}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Descripcion del curso
                        </label>
                        <textarea
                            placeholder="Agregue una descripcion del curso"
                            className="block w-full px-4 py-6 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register('description', { required: false })}
                        />
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        id="checkboxCourse"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        {...register('createAnnouncement')} // Registro del nuevo campo
                      />
                      <label htmlFor="checkboxCourse" className="ml-2 text-sm font-medium text-gray-600">
                        Publicar al feed
                      </label>
                    </div>
                </div>
                <div className='w-auto flex flex-col items-center gap-2 lg:border-l border-black'>
                    <div className='mx-auto lg:ml-9'>
                        {
                            fields.map((field, index) => (
                            <div key={index} className='flex flex-col md:flex-row items-center justify-center gap-2'>
                                <div className="mb-2">
                                    <label
                                        htmlFor="videosdescriptions"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        {`Titulo del video ${index + 1}`}
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register(`videos.${index}.title`, { required: false })}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="Video"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        {`Descripcion video ${index + 1}`}
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register(`videos.${index}.desc`, { required: false })}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="Video"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        {`Video del curso ${index + 1}`}
                                    </label>
                                    <input
                                        type="file"
                                        className="block w-full px-2 py-2 mt-2 text-indigo-700 bg-white rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register(`videos.${index}.url`, { required: false })}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 cursor-pointer text-red-500 text-xl w-[30px] h-[30px] hover:scale-125 transition duration-150 ease-in"
                                    onClick={() => {
                                      remove(index)
                                    }
                                    }
                                    >
                                    <TrashIcon />
                                </button>
                            </div>
                            ))
                        }
                    </div>
                    <button
                        type="button"
                        className="text-black cursor-pointer text-xl rounded-full w-[30px] h-[30px] transition-colors"
                        onClick={() => {
                          append({
                            title: '',
                            desc: '',
                            url: ''
                          })
                        }
                        }
                        >
                        <PlusCircleIcon />
                    </button>
                </div>
            </div>
            <div className="mt-6 px-10">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Crear Curso
                </button>
            </div>
        </form>
        {loading && <ProgressBar progress={uploadProgress} />}
        {message && <div className="text-black font-semibold">{message}</div>}
    </div>
  )
}

export default FormCourses
