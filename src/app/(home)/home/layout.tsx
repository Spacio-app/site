import Header from '../header'
import { auth } from 'auth'

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (<>
    <Header className="bg-stone-800" sessionData={session} />
    { children }
  </>
  )
}
