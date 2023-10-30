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

const FormCourses = () => {
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

  const { fields, append } = useFieldArray({
    name: 'videos',
    control
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    data.contentType = 'course'
    data.author = 'Author 1'
    data.videos.map((video: any) => {
      return (video.url = video.url[0])
    })

    console.log(data)

    axios.postForm('http://127.0.0.1:3001/contentCourse', data)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })

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
    <div className='bg-indigo-100 flex flex-row justify-center items-center p-2 gap-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
            <div> LISTA DE VIDEOS </div>
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
                            {...register(`videos.${index}.title`, { required: false })}
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
                            {...register(`videos.${index}.desc`, { required: false })}
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
                            className="block w-full px-2 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register(`videos.${index}.url`, { required: false })}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="Video"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Preview del video
                        </label>
                        {/* i want to check the video that was uploaded before */}
                        <video controls/>
                    </div>
                </Fragment>
                ))
            }
            <button
                type="button"
                className="text-white transition-colors justify-center"
                onClick={() => {
                  append({
                    title: '',
                    desc: '',
                    url: ''
                  })
                }
                }
                >
                +
            </button>
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
