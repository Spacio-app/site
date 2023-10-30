import '@/css/globals.css'
import Header from './header'
import { auth } from 'auth'

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
        <Header sessionData={session} />
            <main>{ children }</main>
    </body>
    </html>
  )
}
