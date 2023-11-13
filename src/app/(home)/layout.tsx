import '@/css/globals.css'
import Header from './header'
import { auth } from 'auth'
import { SessionProvider } from 'next-auth/react'

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  
  return (
    <html lang='en'>
    <head />
    <body>
      <SessionProvider session={session}>
        <Header sessionData={session} />
            <main>{ children }</main>
      </SessionProvider>
    </body>
    </html>
  )
}
