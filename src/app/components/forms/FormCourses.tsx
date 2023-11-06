'use client'

import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import axios from 'axios'
import { Fragment } from 'react'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { headers } from 'next/dist/client/components/headers'
// axios.interceptors.response.use(function (response) {
//   // Optional: Do something with response data
//   return response
// }, async function (error) {
//   // Do whatever you want with the response error here:

//   // But, be SURE to return the rejected promise, so the caller still has
//   // the option of additional specialized handling at the call-site:
//   return Promise.reject(error)
// })

const FormCourses = ({ session }: any) => {
  //   const apiBaseUrl = process.env.API_BASE_URL

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors
  } = useForm(
    {
      defaultValues: {
        title: '',
        description: '',
        videos: [{ title: '', desc: '', url: '' }]
      },
      mode: 'onBlur'
    }
  )

  const { fields, append, remove } = useFieldArray({
    name: 'videos',
    control
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    data.videos.map((video: any) => {
      return (video.url = video.url[0])
    })

    console.log(data)

    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.accessToken}`,
      User: JSON.stringify(session?.user)
    }
    axios.postForm('http://127.0.0.1:3001/contentCourse', data, { headers })
      .then((response) => {
        console.log(response.data)
        alert('Curso creado con exito')
      })
      .catch((error) => {
        console.error(error)
      })
    // const response = await fetch('http://127.0.0.1:3001/contentCourse', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers,
    //   body: JSON.stringify(data)
    // })

    // if (response) {
    //   console.log('OK')
    // }
    // const formData = new FormData()
    // formData.append('title', data.title)

    // console.log(formData)
    // const response = await fetch('http://localhost:3001/contentCourse', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': undefined as any
    //   },
    //   body: formData
    // })
  }
  // const videoRefs = useRef([])
  // const handleVideoChange = (e, index) => {
  //   const file = e.target.files[0]
  //   const newFile = { file, preview: URL.createObjectURL(file) }
  //   videoRefs.current[index] = newFile
  // }
  return (
    <div className='bg-white border p-5 flex flex-row justify-center items-center p-2 gap-10 min-w[auto] min-h[auto] lg:min-w[1200px]'>
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
                                        className="block w-full px-2 py-2 mt-2 text-indigo-700 bg-white w-[200px] rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register(`videos.${index}.url`, { required: false })}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 cursor-pointer text-red-500 text-xl w-[30px] h-[30px] transition-colors hover:scale-125 transition duration-150 ease-in"
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
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Crear Curso
                </button>
            </div>
        </form>
    </div>
  )
}

export default FormCourses
