'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const CardPost = ({ content }: any) => {
  const router = useRouter()

  function handleClick () {
    router.push(`/home/posts/${content.id}`)
  }
  return (
    <>
      <div className='bg-white shadow-md rounded-lg overflow-hidden w-[90%] h-[100%] border'>
        <div className='bg-orange-400 h-[50%] flex justify-center items-center w-full min-h-[200px] max-h-[200px] object-contain'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#FFF" d="M18.385 20H5.615q-.666 0-1.14-.475Q4 19.051 4 18.385V5.615q0-.666.475-1.14Q4.949 4 5.615 4h12.77q.666 0 1.14.475q.475.474.475 1.14v12.77q0 .666-.475 1.14q-.474.475-1.14.475Zm-.154-3.346H5.769v1.808h12.462v-1.808Zm-12.462-.885h12.462v-1.807H5.769v1.807Zm0-2.923h12.462V5.77H5.769v7.077Zm0 3.808v1.808v-1.808Zm0-.885v-1.807v1.807Zm0-2.923V5.77v7.077Zm0 1.116v-1.116v1.116Zm0 2.692v-.885v.885Z"/></svg>
        </div>
        <div className='p-6 h-[50%]'>
          <div className='pb-2 border-b border-gray-300'>
            <h1 className='text-2xl font-semibold text-gray-800 first-letter:capitalize'> {content.title } </h1>
          </div>
          <p className='mt-2 text-gray-600 first-letter:capitalize max-h-[100px] whitespace-wrap overflow-hidden text-ellipsis'>{ content.description } </p>
          <div className='mt-4 flex items-center'>
            <div className='flex items-center'>
              <div className='flex flex-col items-start'>
                <div className='text-sm font-medium text-gray-900 capitalize'>
                  { content.author.name }
                </div>
                <button onClick={handleClick}>Ver Publicación</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPost
