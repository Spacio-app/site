// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// import { getServerSession } from 'next-auth/next'
// import { getToken } from 'next-auth/jwt'
import Card from '@/app/components/Card'
import CardCourse from '@/app/components/CardCourse'
import CardFile from '@/app/components/CardFile'
import CardPost from '@/app/components/CardPost'
import CardTest from '@/app/components/CardTest'
import { type ReactElement } from 'react'

// import { useRouter } from 'next/navigation'
export const getProjects = async () => {
  // give me example url to fetch data
  const res = await fetch('http://127.0.0.1:3001/content', { cache: 'no-store' })
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
        <h1 className='ml-6 mt-6 text-2xl font-semibold tracking-tight'> Bienvenido Usuario { 'hola' }</h1>
        <div className='mt-4 flex gap-6 p-6'>
          <aside className="w-52 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-medium mb-2">Filtros</h2>
            <div className="mb-4">
              <label className="block font-medium mb-2">Tipo de proyecto:</label>
              <select className="border border-gray-300 rounded p-2 w-full">
                <option value="">Todos</option>
                <option value="web">Web</option>
                <option value="movil">Móvil</option>
                <option value="desktop">Desktop</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Estado:</label>
              <select className="border border-gray-300 rounded p-2 w-full">
                <option value="">Todos</option>
                <option value="en-progreso">En progreso</option>
                <option value="completado">Completado</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Aplicar filtros</button>
          </aside>
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-flow- gap-4">
            {
              projects?.map(({ id, title, description, author, miniature, contenttype, createdAt, updatedAt, cardType }: Spacio.Common.Content) => {
                // <div key={id}>
                //   <h1>{title}</h1>
                //   <p>{completed}</p>
                // </div>
                let CardComponentType
                if (contenttype === 'course') {
                  CardComponentType = <CardCourse id={id} />
                } else if (contenttype === 'test') {
                  CardComponentType = <CardTest />
                } else if (contenttype === 'file') {
                  CardComponentType = <CardFile />
                } else if (contenttype === 'post') {
                  CardComponentType = <CardPost />
                }
                return <Card key={id} title={title} description={description}
                  miniature={miniature
                    ? miniature.charAt(0) === 'h' ? miniature : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png'
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png'} createdAt={createdAt} author={author} updatedAt={updatedAt} cardType={CardComponentType as ReactElement} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
export const runtime = 'edge'
