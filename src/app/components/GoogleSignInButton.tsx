'use client'
// import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
// import { useEffect } from 'react'

const GoogleLoginButton = () => {
//   const searchParams = useSearchParams()
  // const callbackUrl = searchParams.get('callbackUrl')

  // useEffect(() => {
  //   console.log('callbackUrl', callbackUrl)
  // }, [callbackUrl])
  const callbackUrl = ''

  return (<>
    <button
      className='bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full text-center'
      style={{ width: '118px' }}
      onClick={() => {
        void signIn('google', { callbackUrl })
      }}
    >
      <svg
        aria-hidden='true'
        focusable='false'
        data-icon='google'
        className='mr-8 w-5'
        style={{ marginRight: 'auto', marginLeft: 'auto' }}
        role='img'
        xmlns='http://www.w3.org
        /2000/svg'
        viewBox='0 0 488 512'
      >
        <path
          fill='white'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
        ></path>
      </svg>
    </button></>
  )
}

export default GoogleLoginButton
