import '@/css/globals.css'
import { auth } from 'auth'
import { SessionProvider } from 'next-auth/react'
import { permanentRedirect } from 'next/navigation'

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  console.log('SESSION', session)

  return (
    <html lang='en'>
    <head />
    <body>
      <SessionProvider session={session}>
            <main>{ children }</main>
      </SessionProvider>
    </body>
    </html>
  )
}
