import '@/css/globals.css'
import Provider from '@/shared/provider'
// import Sidenav from './sidenav'
import Header from '@/(landing)/header'

export const metadata = {
  title: 'Spacio'
  // description: 'Generated by Next.js'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <head />
    <body>
        <Provider>
            <Header />
              <main>{ children }</main>
            {/* <Sidenav>
            </Sidenav> */}
        </Provider>
    </body>
    </html>
  )
}
