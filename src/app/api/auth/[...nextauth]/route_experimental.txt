import Auth from '@auth/core'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import Google from '@auth/core/providers/google'
import type { Adapter } from '@auth/core/adapters'
// import type { AuthConfig } from '@auth/core/types'

const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })
  ]
})
