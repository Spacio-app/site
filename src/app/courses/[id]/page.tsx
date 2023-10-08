const getCourseById = async (id: string) => {
  const response = await fetch(`http://127.0.0.1:3001/content/${id}`)
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

  const { title, videosurl, description, author } = course

  // console.log('Detalles del Curso:', course)

  // Ahora puedes renderizar los datos en tu componente JSX

  return (
    <>
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-center ">
                    {/* Contenedor del video */}
                    <section className="w-3/4 pr-8">
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-gray-600 mb-4">Autor: {author}</p>
                        <video controls width="100%">
                            <source src={videosurl} type="video/mp4" />
                            Tu navegador no admite la reproducción de videos.
                        </video>
                        <p className="text-gray-800 mt-4">{description}</p>
                        {/* Mostrar otros detalles del curso aquí */}
                    </section>

                    {/* Menú de selección de videos */}
                    <aside className="w-1/4 overflow-y-auto">
                        <h2 className="text-lg font-semibold mt-0 mb-4">Clases</h2>
                        <ul>
                            {/* <li className="mb-2">
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
                            </li> */}
                        </ul>
                    </aside>
                </div>
            </div>
        </div>

    </>
  )
}
export default Course
