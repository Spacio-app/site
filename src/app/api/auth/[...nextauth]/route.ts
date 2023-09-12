import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/app/api/controllers/prisma'

export const runtime = 'edge'

export const authOptions: any = {
  adapter: PrismaAdapter(prisma as any),
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

export const GET = handler.handlers.GET
export const POST = handler.handlers.POST

// export { handler as GET, handler as POST }
