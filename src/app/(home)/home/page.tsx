// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// import { getServerSession } from 'next-auth/next'
// import { getToken } from 'next-auth/jwt'

// import { useRouter } from 'next/navigation'
export const getProjects = async () => {
  // give me example url to fetch data
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })
  const projects = await res.json()

  return projects
}

const Home = async () => {
  // const session = await getServerSession()
  // const session = await getServerSession(req, res, authOptions)
  // const { data: session } = useSession()

  // const router = useRouter()

  // if (status === 'loading') {
  //   return <p>Loading...</p>
  // }

  // if (status === 'unauthenticated') {
  //   // router.push('/')
  //   return <p>Access Denied</p>
  // }
  const projects = await getProjects()

  return (
    <>
      <section>
        <div className='py-4'>
          {
            projects?.map((project: any) => (
              <div key={project.id}>
                <h1>{project.title}</h1>
                <p>{project.completed}</p>
              </div>
            ))
          }
          <h1 className='text-2xl font-semibold tracking-tight'> Bienvenido Usuario { 'hola' }</h1>
        </div>
      </section>
    </>
  )
}

export default Home
export const runtime = 'edge'
