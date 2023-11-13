import Video from '@/components/Video'
import { DisplayVideo } from '@/components/DisplayVideo'
import Image from 'next/image'
const getCourseById = async (id: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(`${apiBaseUrl}content/${id}`)
  console.log(response)
  const course = await response.json()

  return course
}

const Course = async ({ params }: { params: any }) => {
  const course = await getCourseById(params.id)
  // if (!course) {
  //   console.error('Curso no encontrado')
  //   return
  // } else {
  //   console.log(course)
  // }

  const { title, description, author, videos } = course

  // console.log('Detalles del Curso:', course)

  // Ahora puedes renderizar los datos en tu componente JSX

  return (
    <>
      <section className="md:container max-w-full md:mx-auto min-h-screen px-6 lg:px-4 xl:px-4">
        <div className="mt-2 text-3xl px-2 py-6">
          <h1 className="font-bold font-sans first-letter:capitalize">
            {title}
          </h1>
        </div>

        <div className="mt-2">
          <DisplayVideo videos={videos} />

          {/* AUTOR, DESCRIPCIÓN Y FEEDBACK */}
          <div className="mt-6 mb-6 h-full flex flex-col md:flex-row gap-6 md:w-[75.3%]">
            <div className="lg:w-2/3 md:w-full border border-gray-500 rounded-md">
              <div className="border-b border-gray-500 p-4 pl-7 flex flex-col md:flex-row items-center">
                <Image
                  width={'100'}
                  height={'100'}
                  src={author.photo}
                  alt="perfil"
                  className="mr-3 ml-3 border rounded-xl max-w-[70px]"
                />
                <h2 className="font-bold p-6 capitalize">
                  <a href=""> {author.name} </a>
                </h2>
              </div>
              <div className="border-t border-gray-500 pt-4 pl-11 pr-11 pb-4 md:text-justify">
                <h2 className="font-bold">Descripción del curso</h2>
                <p className="mt-3 first-letter:capitalize">{description}</p>
              </div>
            </div>

            {/* FEEDBACK ESTUDIANTES (30%) */}
            <div className="lg:w-1/3 md:w-full border border-gray-500 rounded-2xl flex-grow">
              <div className="p-6">
                <h2 className="font-bold">Feedback Estudiantes</h2>
              </div>
              <div className="w-[100%] items-center flex p-3">
                <div className="shadow-lg border-l-2 rounded-2xl w-fit p-11">
                  <p className="font-bold text-3xl">7.0</p>
                </div>
                <div className="ml-6">Puntaje</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-center ">

                    <section className="w-3/4 pr-8">
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-gray-600 mb-4">Autor: {author}</p>
                        <Video videoUrl={videosurl as string} />
                        <p className="text-gray-800 mt-4">{description}</p>

                    </section>

                    <aside className="w-1/4 overflow-y-auto">
                        <h2 className="text-lg font-semibold mt-0 mb-4">Clases</h2>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="block text-gray-800 hover:text-blue-500">
                                Video 1: {title}
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="block text-gray-800 hover:text-blue-500">
                                Video 2: Título del Video
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="block text-gray-800 hover:text-blue-500">
                                Video 3: Título del Video
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="block text-gray-800 hover:text-blue-500">
                                Video 4: Título del Video
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div> */}
    </>
  )
}
export default Course
