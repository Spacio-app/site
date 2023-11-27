'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CardFile = ({ content }: { content: Spacio.Common.Content }) => {
  const router = useRouter()
  function handleClick () {
    router.push(`/home/#/${content.id}`)
  }
  return (
    <>
      <div className='bg-white shadow-md rounded-lg overflow-hidden w-[90%] h-[100%] border'>
        <div className='bg-purple-400 h-[50%] flex justify-center items-center min-h-[200px] max-h-[200px] object-contain'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1024 1024"><path fill="#FFF" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"/></svg>
        </div>
        <div className='p-6 h-[50%]'>
          <div className='pb-2 border-b border-gray-300'>
            <h1 className='text-2xl font-semibold text-gray-800 first-letter:capitalize'> { content.title } </h1>
          </div>
          <p className='mt-2 text-gray-600 first-letter:capitalize max-h-[100px] whitespace-wrap overflow-hidden text-ellipsis'>{ content.description }</p>
          <div className='mt-4 flex items-center'>
            <div className='flex items-center'>
              <div className='flex flex-col items-start'>
                <div className='text-sm font-medium text-gray-900 capitalize'>
                { content.author.name }
                </div>
                  {/* <button onClick={handleClick}>Ver Documento</button> */}
                <form method="get" action={content.filesURL[0]>
                  <button type="submit">Descargar Documento</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default CardFile
