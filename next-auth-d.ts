import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    user: {
      email: string
      image: string
      name: string
      career: string
      campus: string
      careerYear: string
      aboutMe: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    user: {
      email: string
      image: string
      name: string
      career: string
      campus: string
      careerYear: string
      aboutMe: string
    }
  }
}
