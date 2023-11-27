import { auth } from 'auth'

const getTestById = async (id: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(`${apiBaseUrl}content/${id}`)
  console.log(response)
  const test = await response.json()
  if (test.error) {
    return null
  }
  return test
}

function capitalizeWords (str: any) {
  return str.toLowerCase().replace(/\b\w/g, (char: any) => char.toUpperCase())
}

const TestPreview = async ({ params }: any) => {
  const session = await auth()
  const test = await getTestById(params.id)
  // si no existe el test, redireccionar a la página de error 404
  if (!test) {
    return <div>Recurso no encontrado</div>
  }

  return (
        <section className=''>
            <div className="border rounded-xl border-gray-300 mx-[30%] my-6">
                <div className="flex flex-col justify-center items-center gap-4 py-4">
                    <div className="">
                        <h2 className="font-semibold text-[40px]">{ test.title }</h2>
                    </div>
                    <div className="">
                        <span className="text-[20px]"> <span className='font-semibold'>Hecho por:</span>{' '} {capitalizeWords(test.author.name)}</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-full flex flex-col justify-center items-center gap-2'>
                    <div className='text-center'>
                      <span>Descripción</span>
                    </div>
                    <div className='w-[80%] h-[160px] border rounded-lg p-3'>
                      {test.description}
                    </div>
                  </div>
                  <div className='w-full flex flex-row justify-center items-center gap-6 mt-[100px]'>
                    <div className='text-center flex flex-col w-[50%]'>
                      <div>
                        <div className='flex justify-center items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z" fill="#000000"/></svg>
                        </div>
                        <span>Cantidad de preguntas</span>
                      </div>
                      <div>
                        {test.questions.lenght}
                      </div>
                    </div>
                    <div className='text-center flex flex-col w-[50%]'>
                      <div>
                        <div className='flex justify-center items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84Zm68-84a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12V72a12 12 0 0 1 24 0v44h44a12 12 0 0 1 12 12Z"/></svg>
                        </div>
                        <span>Tiempo para realizar prueba</span>
                      </div>
                      <div>
                        120 minutos
                      </div>
                    </div>
                  </div>
                  <div className='mt-12 py-4'>
                    <div>
                      <button className='border p-3 rounded-md bg-blue-500 text-white hover:bg-blue-400'>
                        Realizar Prueba
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </section>
  )
}

export default TestPreview
