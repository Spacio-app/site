'use client'

import Link from 'next/link'
import Image from 'next/image'
// import LoginButton from '../components/auth/SignInButton'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SignInButton from '@/components/SignInButton'
import { twMerge } from 'tailwind-merge'

const navigation: any[] = [
  { name: 'Home', href: '/home', current: false },
  { name: 'Explorar', href: '/home/explore', current: false },
  { name: 'Crear contenido', href: '/home/create', current: false },
  { name: 'Sobre Nosotros', href: '/home/about-us', current: false }
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

function classNames (...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({ sessionData, className }: any) => {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 0) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={twMerge('top-0 left-0 w-full shadow-md z-50', className)}>
    {/* <nav className='center flex items-center text-sm font-medium tracking-wider uppercase text-stone-500'>
        <ul className='ml-auto flex justify-center gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
        <ul className='ml-auto'>
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav> */}

      <Disclosure as="nav" className={'bg-transparent z-10'}>
        {({ open }) => (
          <>
            <div className="px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-center">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open
                      ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        )
                      : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center sm:items-stretch gap-3 flex-grow">
                  <div className="flex items-center">
                    <a className="flex items-center gap-4 text-white" href="/">
                      <Image
                        className="h-9 w-auto"
                        src="/rocket.svg"
                        alt="Your Company"
                        width={40}
                        height={40}
                      />
                      Spacio
                    </a>
                  </div>
                  <div className='flex items-center border-gray-300 pr-6'>
                  </div>
                  <div className="hidden sm:flex flex-1 justify-end">
                    <div className="flex gap-6 justify-center items-center">
                    {sessionData && navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    </div>
                  </div>
                </div>
                  <SignInButton sessionData={sessionData}/>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {sessionData && navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}

export default Header
