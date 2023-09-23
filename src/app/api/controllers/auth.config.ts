import GoogleProvider from '@auth/core/providers/google'
import type { AuthConfig } from '@auth/core/types'

const authConfig = {
  providers: [GoogleProvider]
} satisfies AuthConfig

export default authConfig
