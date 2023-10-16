import Video from '@/components/Video'

const getCourseById = async (id: string) => {
  const apiBaseUrl = process.env.API_BASE_URL
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

  const { title, videosurl, videosdescriptions, videostitles, miniature, description, author } = course

  // console.log('Detalles del Curso:', course)

  // Ahora puedes renderizar los datos en tu componente JSX

  return (
    <>
        <section className="container max-w-full pl-28 pr-28">
            {/* DIV PRINCIPAL DE TODA LA PÁGINA */}
            <div className="">
                {/* DIV TÍTULO PRINCIPAL */}
                <div className="w-full flex">
                <div className="pt-8 pb-8 text-3xl max-w-full ml-0 w-3/4">
                    <h1 className="font-bold font-sans capitalize"> { title } </h1>
                </div>
                </div>

                {/* DIV VIDEO Y LISTA */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className="w-full md:w-[80%] h-[80%] p-0 relative h-vid group mr-2">
                        <Video videoUrl={videosurl as string} />
                        <div className="p-2 absolute top-0 left-0 rounded-tl-none bg-black rounded-br-2xl group-hover:opacity-100 opacity-0 transition-opacity">
                        <p className="font-bold text-white capitalize"> { title } </p>
                        </div>
                    </div>
                    {/* DIV CONTENIDO DEL CURSO Y LISTADO DE CLASES */}
                    <div className="w-full md:w-[450px] border-t-2 border-l-2 border-r-2 shadow-xl rounded-xl overflow-hidden max-h-[550px] flex flex-col border-gray-300">
                        <div className="bg-gray-200 border-b-2 m-5 rounded-xl">
                            <h2 className="text-lg font-bold p-2.5">Contenido del curso</h2>
                        </div>
                        <div className="overflow-y-auto h-[100%] m-5 rounded-lg">
                            <ul className='text-base'>
                                <li className="items-center flex mt-3">
                                {/* <img src={miniature} alt="foto" className='mr-3 border rounded-full p-3 w-'/> */}
                                <a className='border rounded-lg p-3 md:w-[80%]' href="#">{ videostitles }</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Descripción, autor, etc */}
                <div className='flex w-full mt-5 md:w-[80%] shadow-xl'>
                    <div className="rounded-md border-2 md:w-[70%] border-gray-300 flex flex-col">
                        {/* DIV PADRE PERFIL */}
                        <div className='flex p-6 items-center'>
                            <div className='text-lg font-bold'>Autor:</div>
                        {/* <div>
                            <img src={} alt="FOTO" />
                        </div> */}
                            <div className='ml-3 capitalize'><a href="#">{ author }</a></div>
                        </div>
                        {/* DIV DESCRIPCIÓN */}
                        <div className='border-t-2 border-gray-300 p-6'>
                            <div>
                                <h2 className="text-lg font-bold">Descripción del curso</h2>
                            </div>
                        <div className="text-justify">
                            <p className="pt-2 capitalize">
                            { description }
                            </p>
                        </div>
                    </div>
                </div>
                <div className='rounded-md border-2 ml-3 border-gray-300 shadow-xl md:w-[20%]'>
                    <div className='p-3 text-lg font-bold'>
                        <h2>Feedback de Estudiantes</h2>
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
