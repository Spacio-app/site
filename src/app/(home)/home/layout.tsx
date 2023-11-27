import { permanentRedirect } from 'next/navigation'
import Header from '../header'
import { auth } from 'auth'

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (session?.user.career === '') {
    permanentRedirect('/complete-profile')
  }

  return (<>
    <Header className="bg-stone-800" sessionData={session} />
    { children }
  </>
  )
}
