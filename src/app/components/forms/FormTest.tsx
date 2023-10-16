'use client'

import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import axios from 'axios'
import { Fragment } from 'react'

// axios.interceptors.response.use(function (response) {
//   // Optional: Do something with response data
//   return response
// }, async function (error) {
//   // Do whatever you want with the response error here:

//   // But, be SURE to return the rejected promise, so the caller still has
//   // the option of additional specialized handling at the call-site:
//   return Promise.reject(error)
// })

const FormTest = () => {
  //   const apiBaseUrl = process.env.API_BASE_URL

  const {
    control,
    register,
    handleSubmit
  } = useForm()

  const { fields, append } = useFieldArray({
    name: 'video',
    control
  })
  const onSubmit: SubmitHandler<any> = async (data) => {
    data.contentType = 'test'
    data.author = 'Author 1'

    console.log(data)

    axios.postForm('https://api.spacio.app/contentTest', data)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='bg-indigo-100 flex flex-row justify-center items-center p-2 gap-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-2">
                <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Titulo de la Prueba
                </label>
                <input
                    type="text"
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
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register('description', { required: false })}
                />
            </div>
            <div> LISTA DE PREGUNTAS </div>
            {
                fields.map((field, index) => (
                <Fragment key={index}>
                    <div className="mb-2">
                        <label
                            htmlFor="videosdescriptions"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Titulo del video
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register(`video.${index}.title`, { required: false })}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="Video"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Descripcion del curso
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register(`video.${index}.desc`, { required: false })}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="Video"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Video del curso
                        </label>
                        <input
                            type="file"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register(`video.${index}.url`, { required: false })}
                        />
                    </div>
                </Fragment>
                ))
            }
            <button
                type="button"
                onClick={() => {
                  append({
                    title: '',
                    desc: '',
                    url: ''
                  })
                }
                }
                >
                APPEND
            </button>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}

export default FormTest
