import GoogleLoginButton from '@/app/components/GoogleSignInButton'
import '@/app/css/globals.css'
import Image from 'next/image'
const SignIn = async () => {
  return (
      <section className='h-full'>
        <div className='flex items-center h-full bg-gray-400'>
          <div className='flex-auto max-w-[50%]'>
            <Image
              className='m-auto'
              src={'/login_door.svg'}
              alt='logo'
              height={400}
              width={400}
            />
          </div>
          <div className='flex-auto max-w-[50%] h-full bg-white flex items-center'>
            <div className="w-full">
              <div>
                <h1 className='text-2xl text-center font-semibold tracking-tight'>Bienvenido!</h1>
              </div>
              {/* form */}
              <div className="bg-white rounded px-20 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                  <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button"
                    style={{ width: '118px' }}
                  >
                    Sign In
                  </button>
                  <GoogleLoginButton />
                </div>
              </div>
              <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default SignIn
