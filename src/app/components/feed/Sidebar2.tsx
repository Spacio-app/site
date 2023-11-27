import { auth } from 'auth'

const Sidebar2 = async () => {
  const session = await auth()
  return (
    <div className="h-screen flex flex-col gap-4">
      <div className="px-2">
        <div className="text-center flex flex-col justify-center items-center py-3 border-b border-gray-300">
          <div className='rounded-md p-2 flex flex-col justify-center items-center'>
            <div className="">
            <div className="text-center">
              Explora contenido interesante, interactúa con la comunidad y
              disfruta de tu experiencia en nuestro sitio.
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-3">
          <div className="text-center border-double border-4 border-gray-400 rounded-md p-2 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="#666666"
                  d="M1990 748q-33 33-64 60t-65 47t-73 29t-90 11q-34 0-65-6l-379 379q13 38 19 78t6 80q0 65-13 118t-37 100t-60 89t-79 87l-386-386l-568 569l-136 45l45-136l569-568l-386-386l45-45q70-70 160-107t190-37q82 0 157 25l379-379q-6-31-6-65q0-49 10-88t30-74t46-65t61-65l690 690zm-292 19q55 0 104-26l-495-495q-26 49-26 104q0 28 6 52t15 51L810 944q-25-10-47-19t-44-15t-45-9t-51-4q-57 0-110 16t-100 49l673 673q32-46 49-99t17-110q0-27-3-50t-10-46t-16-45t-19-47l491-492q26 8 50 14t53 7z"
                />
              </svg>
            </div>
            <div>
              Si quieres <span className="font-medium underline">crear</span>{' '}
              contenido, puedes ir a la página directamente desde <a className="underline underline-offset-2 text-blue-700" href="/home/create">aquí</a> o desde la barra de navegación.
            </div>
          </div>
          <div className="text-center border-double border-4 border-gray-400 rounded-md p-2 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="#666666"
                  d="M1990 748q-33 33-64 60t-65 47t-73 29t-90 11q-34 0-65-6l-379 379q13 38 19 78t6 80q0 65-13 118t-37 100t-60 89t-79 87l-386-386l-568 569l-136 45l45-136l569-568l-386-386l45-45q70-70 160-107t190-37q82 0 157 25l379-379q-6-31-6-65q0-49 10-88t30-74t46-65t61-65l690 690zm-292 19q55 0 104-26l-495-495q-26 49-26 104q0 28 6 52t15 51L810 944q-25-10-47-19t-44-15t-45-9t-51-4q-57 0-110 16t-100 49l673 673q32-46 49-99t17-110q0-27-3-50t-10-46t-16-45t-19-47l491-492q26 8 50 14t53 7z"
                />
              </svg>
            </div>
            <div>
              Si quieres <span className="font-medium underline">explorar</span>{' '}
              contenido, como cursos, pruebas, entre otros, puedes ir a la
              página directamente desde{' '}
              <a className="underline underline-offset-2 text-blue-700" href="/home/explore">aquí</a> o desde la barra de navegación.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar2
