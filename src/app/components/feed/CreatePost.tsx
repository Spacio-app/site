'use client'

import { useSession } from 'next-auth/react'
import CommentAuthor from './CommentAuthor'
import { useForm } from 'react-hook-form'

function CreatePost () {
  const session = useSession()
  //   console.log('SESSSION', session)
  const { register, handleSubmit, reset } = useForm()
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const onSubmit = async (data: any) => {
    console.log(data)
    const response = await fetch(`${apiBaseUrl}createFeed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.data?.accessToken}`,
        User: JSON.stringify(session?.data?.user)
      },
      body: JSON.stringify(data)
    })
    if (response) {
      const res = await response.json()
      // clean form
      reset()
      // show success message
      console.log(res)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} className="border border-gray-300 flex-col p-4 space-y-3 rounded-xl">
            <div className="w-[100%] flex">
                <a href="" className='cursor-pointer'><CommentAuthor authorAvatar={session?.data?.user.image} /></a>
                <input type="text" placeholder="Título de la publicación" className="flex-1 px-3 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%]"
                {...register('title', { required: true })}
                />
            </div>
            <div className="w-[100%] h-[80px]">
                <input type="text" placeholder="Descripción..." className="flex-1 px-3 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%]"
                {...register('description', { required: true })}
                />
            </div>
            <button className='bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-xl'>
                Publicar
            </button>
        </form>
  )
}
export default CreatePost
