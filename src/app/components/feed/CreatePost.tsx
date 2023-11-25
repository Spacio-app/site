'use client'

import { useSession } from 'next-auth/react'
import CommentAuthor from './CommentAuthor'
import { useForm } from 'react-hook-form'
import UserCreatePost from './UserCreatePost'
import { useRouter } from 'next/navigation'

function CreatePost () {
  const router = useRouter()
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
      router.refresh()
      // show success message
      console.log(res)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} className="border border-gray-300 flex-col p-4 space-y-3 rounded-xl shadow-xl">
            <div className="w-[100%] flex items-center">
                <a href="#" className='cursor-pointer'><UserCreatePost authorAvatar={session?.data?.user?.image} /></a>
                <div className='w-full h-[40px]'>
                  <textarea
                    id="PostTitle"
                    className="border rounded-2xl p-3 text-sm resize-none flex-1 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%] overflow-y-auto-custom" // Utilizo <textarea> en lugar de <input>
                    placeholder="Título de la publicación"
                    style={{ paddingTop: '9px' }} // Ajusté el estilo de padding superior
                    {...register('title', { required: true })}
                  />
                </div>
            </div>
            <div className="w-[100%] h-[80px]">
              <textarea
                  id="PostDescription"
                  className="border rounded-lg p-3 text-sm resize-none flex-1 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%] overflow-y-auto-custom" // Utilizo <textarea> en lugar de <input>
                  placeholder="Descripción..."
                  style={{ paddingTop: '9px' }} // Ajusté el estilo de padding superior
                  {...register('description', { required: true })}
                />
                {/* <input type="text" placeholder="Descripción..." className="flex-1 px-3 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%]"
                {...register('description', { required: true })}
                /> */}
            </div>
            {/* <div className="relative">
              <div className="absolute top-5 left-3 transform -translate-y-1/2 pointer-events-none">
                {svg}
              </div>
              <textarea
                name={name}
                id={id}
                className="border rounded-sm p-3 pl-10 text-sm w-full h-[250px] resize-none" // Utilizo <textarea> en lugar de <input>
                placeholder={placeHolder}
                style={{ paddingTop: '9px' }} // Ajusté el estilo de padding superior
              />
            </div> */}
            <button className='bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm'>
                Publicar
            </button>
        </form>
  )
}
export default CreatePost
