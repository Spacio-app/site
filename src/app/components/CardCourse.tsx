'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CardCourse = ({ content }: { content: Spacio.Common.Content }) => {
  const router = useRouter()
  function handleClick () {
    router.push(`/home/courses/${content.id}`)
  }

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-gray-200 object-contain'>
          <Image className="w-full max-h-[300px] object-contain" width={'100'} height={'100'} src={content.miniature as any} alt={''} />
        </div>
        <div className='p-6'>
          <h1 className='text-2xl font-semibold text-gray-800 first-letter:capitalize'>{ content.title }</h1>
          <p className='mt-2 text-gray-600 first-letter:capitalize max-h-[100px] whitespace-wrap overflow-hidden text-ellipsis'>{ content.description }</p>
          <div className='mt-4 flex items-center'>
            <div className='flex items-center'>
              <div className='flex flex-col ml-3'>
                <div className='text-sm font-medium text-gray-900 capitalize'>
                  { content.author.name }
                </div>
                <button onClick={handleClick}>Ver curso</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default CardCourse
