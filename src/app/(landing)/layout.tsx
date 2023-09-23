import '@/app/css/globals.css'
import Provider from '../shared/provider'
import Header from './header'

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
        </Provider>
    </body>
    </html>
  )
}
