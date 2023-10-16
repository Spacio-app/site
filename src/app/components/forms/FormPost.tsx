'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import axios from 'axios'

// axios.interceptors.response.use(function (response) {
//   // Optional: Do something with response data
//   return response
// }, async function (error) {
//   // Do whatever you want with the response error here:

//   // But, be SURE to return the rejected promise, so the caller still has
//   // the option of additional specialized handling at the call-site:
//   return Promise.reject(error)
// })

const FormPost = () => {
  //   const apiBaseUrl = process.env.API_BASE_URL

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit: SubmitHandler<any> = async (data) => {
    data.contentType = 'post'
    data.author = 'Author 1'

    console.log(data)

    axios.postForm('https://api.spacio.app/contentPost', data)
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

  return (
    <div className='bg-indigo-100 flex flex-row justify-center items-center p-2 gap-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-2">
                <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Titulo del documento
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
                    Descripcion del documento
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register('description', { required: false })}
                />
            </div>
            {/* <div className="mb-2">
                <label
                    htmlFor="videosdescriptions"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Titulo del video
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register('videosTitles', { required: false })}
                />
            </div> */}
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
                    {...register('videosDescriptions', { required: false })}
                />
            </div>

            {/* <div className="mb-2">
                <label
                    htmlFor="Video"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Video del curso
                </label>
                <input
                    type="file"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register('videosURL', { required: false })}
                />
            </div> */}

            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}

export default FormPost
