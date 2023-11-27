'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CardTest = ({ content }: { content: Spacio.Common.Content }) => {
  const router = useRouter()
  function handleClick () {
    router.push(`/home/#/${content.id}`)
  }
  return (
    <>
      <div className='bg-white shadow-md rounded-lg overflow-hidden w-[90%] h-[100%] border'>
        <div className='bg-gray-200 h-[50%] flex justify-center items-center w-full min-h-[200px] max-h-[200px] object-contain'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><g fill="#000000"><path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"/><path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5Zm2 1v3h3v-3h-3Z" clip-rule="evenodd"/><path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414l4.707-4.707Z"/><path fill-rule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4H10Zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10Zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5V16Zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Zm0 22.197l-1-1.5V20h2v15.697l-1 1.5Z" clip-rule="evenodd"/></g></svg>
        </div>
        <div className='p-6 h-[50%]'>
          <div className='pb-2 border-b border-gray-300'>
            <h1 className='text-2xl font-semibold text-gray-800 first-letter:capitalize'>Título</h1>
          </div>
          <p className='mt-2 text-gray-600 first-letter:capitalize max-h-[100px] whitespace-wrap overflow-hidden text-ellipsis'>Descripción</p>
          <div className='mt-4 flex items-center'>
            <div className='flex items-center'>
              <div className='flex flex-col items-start'>
                <div className='text-sm font-medium text-gray-900 capitalize'>
                  Autor
                </div>
                <button onClick={handleClick}>Ver Prueba</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default CardTest
