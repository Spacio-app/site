'use client'

import { Fragment } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

function classNames (...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const SignInButton = () => {
  const { data: session } = useSession()

  if (session != null) {
    return (
      <div className=''>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  width={40}
                  height={40}
                  src={session.user.image}
                  alt={session.user.name as string}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      onClick={async () => { await signOut() }}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* {((session?.user?.image) != null)
          ? (
          <div className='flex flex-col items-center'>
              <Image
                width={40}
                height={40}
                src={session.user.image}
                alt={session.user.name as string}
                className='rounded-full'
              />
              <button className="" onClick={async () => { await signOut() }}>Sign out</button>
          </div>
            )
          : (
          <div>
            <span className='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
              <svg
                className='h-full w-full text-gray-300'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </span>
          </div>
            )} */}
      </div>

    // <button
    //   className='text-sm font-medium tracking-wider uppercase text-stone-500'
    //   onClick={() => signOut()}
    // >
    //   Sign Out
    // </button>
    )
  }

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        className='relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none'
        onClick={async () => { await signIn() }}
      >
        Inicia sesión / Registrarse
      </button>
    </div>
  )
}

export default SignInButton
