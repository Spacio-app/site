import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/app/api/controllers/prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session ({ session, token, user }: any) {
      if (session.user != null) {
        session.user.id = user.id
      }
      return session
    },
    async redirect () {
      return '/home'
    }
  },
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
