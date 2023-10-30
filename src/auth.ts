import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authConfig = {
  session: {
    strategy: 'jwt'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET } as any)
  ],
  callbacks: {
    // authorized ({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   return pathname === '/home' && !!auth
    // },
    authorized ({ auth }) {
      return !!auth
    },

    async signIn ({ account, profile, user }: any) {
      console.log('USERRRRRRRRR', user)
      // console.log(profile?.email.endsWith('@duocuc.cl'))
      // console.log('signIn callback', account, profile, user)
      if (profile?.email?.endsWith('@duocuc.cl')) {
        if (user.career === null || user.campus === null || user.careerYear === null || user.aboutMe === null) {
          console.log('redirect to complete profile')
          return '/complete-profile' as any
        } else {
          console.log('redirect to home')
          return true
        }
      } else {
        // Return false to di splay a default error message
        console.log('Error: email not allowed')
        return false
      }
    },
    jwt ({ token, user, account, profile }: any) {
      // console.log('token', token)
      // console.log('user', user)
      // console.log('account', account)
      // console.log('profile', profile)
      if (account?.access_token) {
        token.accessToken = account.access_token
      }
      return token
      // if (user) return { ...token, ...user }

      // return token
    },
    session ({ token, session }: any) {
      // console.log('session callback', token, session)
      // session.user.career = ''
      // session.user.campus = ''
      // session.user.careerYear = ''
      // session.user.aboutMe = ''
      session.accessToken = token.accessToken

      return session
    },
    async redirect () {
      return '/complete-profile'
    }
  },
  pages: {
    signIn: '/signin',
    signOut: '/'
  }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } =
  NextAuth(authConfig)

declare global {
  export interface ProcessEnv {
    NEXTAUTH_SECRET: string
    AUTH_GOOGLE_ID: string
    AUTH_GOOGLE_SECRET: string
  }
}
