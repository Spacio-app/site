import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
let redirectUrl: string = '/'

export const authConfig = {
  session: {
    strategy: 'jwt'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    } as any)
  ],
  events: {
    createUser: async ({ user }: any) => {
      console.log('CREATE USER', user)
      console.log('ID2', user.id)
      try {
        await prisma.user.update({
          data: {
            career: 'admin'
          },
          where: {
            id: user.id
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  callbacks: {
    async authorized ({ request, auth }) {
      // console.log('AUTHORIZEDD', auth, request)
      return !!auth
    },
    // async authorized ({ auth }) {
    //   return !!auth
    // },

    async signIn ({ account, profile, user }: any) {
      console.log('USERRRRRRRRR', user)
      console.log('PROFILEEEEEE', profile)
      console.log('ACCOUNTTTTT', account)
      // console.log(profile?.email.endsWith('@duocuc.cl'))
      // console.log('signIn callback', account, profile, user)
      if (profile?.email?.endsWith('@duocuc.cl')) {
        if (!user) {
          redirectUrl = '/complete-profile'
          console.log('User not found, redirecting to complete profile')
          return '/complete-profile' as any
        } else {
          redirectUrl = '/home'
          return user
        }
      } else {
        // Return false to di splay a default error message
        console.log('Error: email not allowed')
        return false
      }
    },
    async session ({ token, session, user }: any) {
      // console.log('user', user)
      // console.log('session callback', token, session)
      // session.user.career = ''
      // session.user.campus = ''
      // session.user.careerYear = ''
      // session.user.aboutMe = ''
      // console.log('TOKEN_USER', token)
      session.accessToken = token.accessToken

      return session
    },
    async jwt ({ token, user, account, profile }: any) {
      // console.log('token', token)
      // console.log('user', user)
      // console.log('account', account)
      // console.log('profile', profile)
      if (account?.access_token) {
        token.accessToken = account.access_token
      }
      token.user = user

      return token

      // return token
    },
    async redirect (request) {
      // console.log('request', request)
      // console.log('redirect callback', redirectUrl)
      // const redirect = redirectUrl
      return redirectUrl
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
