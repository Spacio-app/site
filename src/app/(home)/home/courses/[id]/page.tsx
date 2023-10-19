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
        <section className="md:container max-w-full md:mx-auto min-h-screen px-6 lg:px-4 xl:px-4">
            <div className="shadow-xl mt-2 text-3xl p-6">
                <h1 className="font-bold font-sans capitalize">{ title }</h1>
            </div>

            <div className="mt-8 md:flex">
                {/* VIDEO Y DESCRIPCIÓN (70%) en pantallas grandes */}
                <div className="lg:w-3/4 md:w-3/4 h-full md:mr-4">
                <div className="relative group aspect-w-16 aspect-h-9">
                    <Video videoUrl={videosurl as string} />
                    <div className="absolute top-0 left-0 group-hover:opacity-100 transition-opacity opacity-0 bg-black text-white p-3 rounded-br-2xl rounded-tl-3xl">
                    <p className='font-bold capitalize'>Nombre de la clase</p>
                    </div>
                </div>

                {/* AUTOR, DESCRIPCIÓN Y FEEDBACK */}
                <div className="mt-6 mb-6 h-full flex flex-col md:flex-row gap-6">
                    <div className="lg:w-2/3 md:w-full border border-gray-500 rounded-md">
                        <div className="border-b border-gray-500 p-4 pl-7 flex flex-col md:flex-row items-center">
                            <img src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg" alt="perfil" className='mr-3 ml-3 border rounded-xl max-w-[70px]'/>
                            <h2 className='font-bold p-6 capitalize'><a href=""> { author } </a></h2>
                        </div>
                        <div className="border-t border-gray-500 pt-4 pl-11 pr-11 pb-4 md:text-justify">
                            <h2 className='font-bold capitalize'>Descripción del curso</h2>
                            <p className='mt-3'>
                            { description }
                            </p>
                        </div>
                    </div>

                    {/* FEEDBACK ESTUDIANTES (30%) */}
                    <div className="lg:w-1/3 md:w-full border border-gray-500 rounded-2xl flex-grow">
                    <div className='p-6'>
                        <h2 className='font-bold'>Feedback Estudiantes</h2>
                    </div>
                    <div className='w-[100%] items-center flex p-3'>
                        <div className='shadow-lg border-l-2 rounded-2xl w-fit p-11'>
                        <p className='font-bold text-3xl'>7.0</p>
                        </div>
                        <div className='ml-6'>
                            Puntaje
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* CONTENIDO Y LISTA DE CLASES */}
                <div className="lg:w-1/4 md:w-1/4 h-full md:ml-4 overflow-hidden max-h-[550px] flex flex-col">
                <div className='p-3 rounded-2xl border-2 border-gray-300'>
                    <h2 className='font-bold'>Contenido del curso</h2>
                </div>
                <div className='mt-9 overflow-y-auto h-[100%]'>
                    <ul>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                        <li className='items-center mt-3 flex mt-[8px]'>
                            <img
                            src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
                            alt="FOTO"
                            className='mr-3 border rounded-full w-[60px]' />
                            <div className='bg-gray-200 p-4 rounded-xl w-full capitalize'>
                                <a href="">Clase 1</a>
                            </div>
                        </li>
                    </ul>
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
