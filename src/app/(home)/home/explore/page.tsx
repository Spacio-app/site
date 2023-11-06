import CardCourse from '@/components/CardCourse'
import CardFile from '@/components/CardFile'
import CardPost from '@/components/CardPost'
import CardTest from '@/components/CardTest'
import { type ReactElement } from 'react'
import { auth } from 'auth'

export const getProjects = async () => {
  // give me example url to fetch data

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${apiBaseUrl}content`, { cache: 'no-store' })
  const projects = await res.json()

  return projects
}

const page = async ({ extraProp }: any) => {
  const session = await auth()
  const projects = await getProjects()
  console.log('EXTRAPROP', extraProp)
  return (
    <>
      <section>
                <h1 className='ml-6 mt-6 text-2xl font-semibold tracking-tight'> Bienvenido Usuario { session?.user.name } </h1>
        <div className='mt-4 flex gap-6 p-6'>
          {/* <aside className="w-52 bg-gray-100 p-4 rounded-lg">
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
          </aside> */}
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-flow- gap-4">
            {
              projects?.map((content: Spacio.Common.Content) => {
                // <div key={id}>
                //   <h1>{title}</h1>
                //   <p>{completed}</p>
                // </div>
                let CardComponentType
                if (content.contenttype === 'course') {
                  CardComponentType = <CardCourse content={content} />
                } else if (content.contenttype === 'test') {
                  CardComponentType = <CardTest />
                } else if (content.contenttype === 'file') {
                  CardComponentType = <CardFile />
                } else if (content.contenttype === 'post') {
                  CardComponentType = <CardPost />
                }
                return (CardComponentType)
              }
              )}
          </div>
        </div>
      </section>
    </>
  )
}

export default page
