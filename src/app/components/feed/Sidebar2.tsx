import { auth } from 'auth'

const Sidebar2 = async () => {
  const session = await auth()
  return (
    <div className="h-screen flex flex-col gap-4">
      <div className="px-2">
        <div className="text-center flex flex-col justify-center items-center py-3 border-b border-gray-300">
          <div className='rounded-md p-2 flex flex-col justify-center items-center'>
            <h2 className="font-semibold text-[20px]">
              Bienvenida/o a Spacio!
            </h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#666666"
                  d="M209.68 883.264c-20.112 41.807-32.802 69.666-144.689 73.73c3.216-107.968 23.792-119.552 64.992-140.08c17.296-8.624 38.832-19.344 62.113-37.248l-38.96-49.744c-18.4 14.128-35.329 21.568-51.697 29.712C32.8 793.858.45 827.569.45 988.289l.543 32.704l31.456-.704c169.632 0 201.328-38.32 233.104-104.32c6.96-14.464 10.832-24.24 22.56-43.729l-47.456-43.104c-14.224 19.408-23.104 37.872-30.976 54.128zm495.279-694.607c-70.768 0-128.352 57.583-128.352 128.335c0 70.784 57.6 128.353 128.352 128.353s128.336-57.584 128.336-128.352c0-70.752-57.6-128.336-128.336-128.336zm0 192.415c-35.328 0-64.08-28.752-64.08-64.08c0-35.313 28.752-64.08 64.08-64.08s64.08 28.767 64.08 64.08c-.016 35.344-28.752 64.08-64.08 64.08zm318.821-351.76c-.976-15.968-13.63-28.771-29.598-29.955c0 0-179.088-13.056-351.376 51.28c-62.944 23.504-114.752 60.737-163.104 117.137c-40.32 47.025-80.385 132.032-115.745 202.608c-13.664 27.248-26.72 53.313-37.792 73.217H148.15a32.003 32.003 0 0 0-23.936 10.768L6.917 581.503A31.993 31.993 0 0 0 .388 612.51c3.44 10.785 12.32 18.945 23.329 21.44l190.944 43.665c13.007 16.064 34.687 40.097 69.376 78.593l72.335 80.192l38.945 164.72a31.984 31.984 0 0 0 21.231 23.056c3.233 1.024 6.576 1.568 9.904 1.568a31.95 31.95 0 0 0 20.832-7.712l118.56-117.936a31.981 31.981 0 0 0 11.184-24.288v-165.12c15.936-9.904 44.191-25.152 70.783-40.032c72.464-40.496 180.624-90.912 225.472-130.784c63.153-56.128 86.16-97.28 108.752-158.112c53.712-144.688 42.288-344.031 41.744-352.447zM922.001 359.469c-19.712 53.072-37.568 84.83-91.248 132.558c-39.664 35.232-148.128 85.824-214.192 122.769c-49.312 27.568-78.848 43.664-91.792 54.256a31.949 31.949 0 0 0-11.76 24.784v167.248l-67.52 74.193l-28.752-121.6a31.949 31.949 0 0 0-7.393-14.064c-58.847-65.216-147.743-163.808-154.56-171.632a32.017 32.017 0 0 0-17.568-10.848L90.624 583.597l71.904-76H344.56a31.988 31.988 0 0 0 27.264-15.248c14.08-22.928 30.416-55.536 49.344-93.296c32.048-63.952 71.92-148.544 107.12-189.632c41.584-48.528 83.824-79.009 136.896-98.848C783.28 66.445 905.152 61.805 960.864 62.22c1.04 59.008-1.184 195.824-38.863 297.248z"
                />
              </svg>
            </div>
            <div className="mt-[10px]">
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
