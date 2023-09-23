'use client'

import { type FC, type ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface MyProps {
  children?: ReactNode
}

const Provider: FC<MyProps> = ({ children }) => {
  return <SessionProvider>{ children }</SessionProvider>
}

export default Provider
