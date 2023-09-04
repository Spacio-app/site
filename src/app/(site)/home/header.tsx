/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Link from 'next/link'
import Image from 'next/image'
// import LoginButton from '../components/auth/SignInButton'
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SignInButton from '@/app/components/SignInButton'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Team', href: '#', current: false }
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

function classNames (...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <header>
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

      <Disclosure as="nav" className="bg-stone-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
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
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
                  <div>
                    <div className="relative mx-auto text-gray-600 md:block hidden">
                        <input
                          className="border-2 border-gray-300 bg-white h-9 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                          type="search" name="search" placeholder="Search">
                        </input>
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                          <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                              version="1.1" id="Capa_1" x="0px" y="0px"
                              viewBox="0 0 56.966 56.966"
                              xmlSpace="preserve"
                              width="512px" height="512px">
                            <path
                              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                          </svg>
                          </button>
                    </div>
                  </div>
                  <SignInButton />
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
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
