import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions as NextAuthConfig } from 'next-auth'
import { getServerSession } from 'next-auth'

import Google from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    userRole?: 'admin'
  }
}

export const config = {
  session: {
    strategy: 'jwt'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET } as any)
  ],
  callbacks: {
    async signIn ({ account, profile }) {
      // console.log(profile?.email.endsWith('@duocuc.cl'))
      if (profile?.email?.endsWith('@duocuc.cl')) {
        return true
      } else {
        // Return false to di splay a default error message
        console.log('Error: email not allowed')
        return false
      }
    },
    session ({ session, token, user }) {
      console.log('Inside SESSION')
      console.log('SESSION', session)
      console.log('TOKEN', token)
      console.log('USER', user)

      return session
    },
    jwt ({ token, user }) {
      console.log('USUARIO', user)
      if (user) {
        console.log('TOKEN', token)
      }
      token.userRole = 'admin'
      return token
    },
    async redirect () {
      return '/home'
    }
  },
  pages: {
    signIn: '/signin',
    signOut: '/'
  }
} satisfies NextAuthConfig

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export async function auth (...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}

// We recommend doing your own environment variable validation
declare global {
  export interface ProcessEnv {
    NEXTAUTH_SECRET: string
    AUTH_GOOGLE_ID: string
    AUTH_GOOGLE_SECRET: string
  }
}
