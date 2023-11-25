'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function WriteComment ({ id, session }: any) {
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()

  const onSubmit = async (data: any) => {
    // const session = useSession()
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    console.log(data)
    const response = await fetch(`${apiBaseUrl}posts/${id}/comments`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
        User: JSON.stringify(session?.user)
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
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border-t border-gray-300">
            <div className="flex items-center space-x-2 text-sm">
                {/* <img
                    src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg" // URL de la imagen de perfil
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                    /> */}
                <input
                    type="text"
                    placeholder="Escribe un comentario..."
                    className="flex-1 px-3 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    {...register('comment', { required: true })}
                    />
                <button
                    type='submit'
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
                    >
                    Publicar
                </button>
            </div>
        </form>

  )
}

export default WriteComment
