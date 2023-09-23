import '@/app/css/globals.css'
import Provider from '@/app/shared/provider'
import Sidenav from './sidenav'

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
            <Sidenav>
                <main>{ children }</main>
            </Sidenav>
        </Provider>
    </body>
    </html>
  )
}
