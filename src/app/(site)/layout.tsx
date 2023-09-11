import './globals.css'
import Footer from './home/footer'
import Header from './home/header'
import Provider from './home/provider'

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
            <Footer />
        </Provider>
    </body>
    </html>
  )
}

export const runtime = 'edge'
