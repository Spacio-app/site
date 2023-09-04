'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const { data: session, status } = useSession()

  const router = useRouter()
  // const [status, setStatus] = useState('')
  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    router.push('/')
    return <p>Access Denied</p>
  }

  return (
      <section>
        <div className='center py-4'>
          <h1 className='text-2xl font-semibold tracking-tight'> Bienvenido Usuario { session?.user?.name }</h1>
        </div>
      </section>
  )
}
export default Home
