import Image from 'next/image'
import React from 'react'

function Card ({ title, description, author, miniature, createdAt, updatedAt, cardType }: Spacio.Common.CardProps) {
  const additionalProps = {
    title,
    description
  }

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-gray-200 object-contain'>
          <Image className="w-full max-h-40 object-contain" width={'100'} height={'100'} src={miniature as any} alt={''} />
        </div>
        <div className='p-6'>
          <h1 className='text-2xl font-semibold text-gray-800'>{ title }</h1>
          <p className='mt-2 text-gray-600'>{ description }</p>
          <div className='mt-4 flex items-center'>
            <div className='flex items-center'>
              <div className='flex flex-col ml-3'>
                <div className='text-sm font-medium text-gray-900'>
                  { author }
                </div>
                <div className='text-sm font-medium text-gray-500'>
                  { React.cloneElement(cardType, { ...additionalProps }) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
