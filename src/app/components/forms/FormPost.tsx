'use client'
// It is important to import the Editor which accepts plugins.
import { useState } from 'react'
import 'draft-js/dist/Draft.css'
import '@draft-js-plugins/image/lib/plugin.css'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const NoSSREditor = dynamic(
  async () => import('@/components/forms/Editor/DraftEditor'),
  {
    ssr: false
  }
)

// The Editor accepts an array of plugins. In this case, only the imagePlugin
// is passed in, although it is possible to pass in multiple plugins.

const PostForm = ({ session }: any) => {
  // usar react hook form
  const [postData, setPostData] = useState()
  const { control, register, handleSubmit, setValue } = useForm()

  const onSubmit = async () => {
    if (!postData) return
    console.log('POST', postData)

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    // USING AXIOS POST TO SEND DATA TO API
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
      User: JSON.stringify(session?.user)
    }

    try {
      const response = await axios.post(`${apiBaseUrl}contentPost`, postData, { headers })
      if (response) {
        const res = response.data // clean form
        // reset()
        // router.refresh()
        // show success message
        console.log(res)
        alert('Publicación creada con exito')
      }
    } catch (error) {
      console.error(error)
      alert('Error al crear la publicación')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='border-b text-xl font-semibold text-center py-4'>
          <h2>Crear Publicación</h2>
        </div>
        <NoSSREditor setPostData={setPostData} />
        <div className="mt-6 px-10">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Crear Publicación
            </button>
        </div>
    </form>
  )
}

export default PostForm
