import '@/app/css/globals.css'
import Provider from '@/app/shared/provider'
// import Sidenav from './sidenav'
import Header from '@/app/(landing)/header'

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
