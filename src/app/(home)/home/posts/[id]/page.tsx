import { Editor, EditorBlock, EditorState, convertFromRaw } from 'draft-js'
import Image from 'next/image'
import NewEditor from './new-editor'
import 'draft-js/dist/Draft.css'

const getContentById = async (id: string) => {
  console.log('start')
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(`${apiBaseUrl}content/${id}`)
  console.log(response)
  const course = await response.json()

  return course
}

const Post = async ({ params }: { params: any }) => {
  const post = await getContentById(params.id)
  // if (!course) {
  //   console.error('Curso no encontrado')
  //   return
  // } else {
  //   console.log(course)
  // }

  const { blocks, entityMap } = post
  console.log('Blocks:', post)
  // console.log('Detalles del Curso:', course)

  // Ahora puedes renderizar los datos en tu componente JSX

  return (
    <>
      <section className="w-auto p-10 border rounded m-10">
        <NewEditor
            blocks={blocks}
            entityMap={entityMap}
        />
      </section>
    </>
  )
}
export default Post
