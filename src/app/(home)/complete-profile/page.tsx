import InputBiography from '@/components/completeProfile/InputBiography'
import InputData from '@/components/completeProfile/InputData'
import InputOption from '@/components/completeProfile/InputOption'
import UserData from '@/components/completeProfile/UserData'
import { auth } from 'auth'

const page = async () => {
  const session = await auth()
  const { name, email, image } = session?.user as any

  return (
    <>
      <section className="flex flex-col mx-3 lg:mx-[10%] my-[40px]">
        <div className="w-full">
          <h1 className="font-semibold text-2xl">Completar Perfil</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="h-fit lg:h-screen w-[100%] lg:w-[70%]">
            <div className="border border-gray-300 mt-6">
              <div className="py-3 px-8 border-b">
                <h2 className="font-semibold">Información Personal</h2>
              </div>
              <div className="py-6 px-8 flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
                <UserData
                  title="Nombre Completo"
                  data={name}
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="#666666" stroke-width="1.5">
                        <circle cx="12" cy="6" r="4" />
                        <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
                      </g>
                    </svg>
                  }
                />
                <UserData
                  title="Correo Institucional"
                  data={email}
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666666"
                        d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v12V8Z"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="pb-6 px-8 flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
                <InputOption
                  title="Carrera"
                  id="career"
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#666666"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M22 10v6M2 10l10-5l10 5l-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </g>
                    </svg>
                  }
                  options={[
                    { value: '1', label: 'Actuación' },
                    { value: '2', label: 'Administración de Empresas' },
                    { value: '3', label: 'Administración Hotelera' },
                    { value: '4', label: 'Administración de Reded y Telecomunicaciones' },
                    { value: '5', label: 'Analista Programador' }
                  ]}
                />
                <InputOption
                  title="Sede"
                  id="campus"
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#666666"
                        d="m16 3.875l-.438.219L5.563 9L5 9.281V11h22V9.281L26.437 9l-10-4.906zm0 2.25L21.875 9h-11.75zM7 12v10H6v2h20v-2h-1V12h-2v10h-2V12h-2v10h-2V12h-2v10h-2V12h-2v10H9V12zM4 25v2h24v-2z"
                      />
                    </svg>
                  }
                  options={[
                    { value: '1', label: 'Sede Alameda' },
                    { value: '2', label: 'Sede Antonio Varas' },
                    { value: '3', label: 'Sede Educación Continua' }
                  ]}
                />
              </div>
              <div className='pb-6 px-8 flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]'>
                  <InputData
                  title="Nombre de Usuario"
                  placeHolder="Ingrese su nombre se usuario"
                  type="text"
                  name="userName"
                  id="userName"
                  svg={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="#666666" d="M13 3c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C5.527 17.343 3 20.883 3 25h2c0-4.43 3.57-8 8-8c2.145 0 4.063.879 5.5 2.25l-4.719 4.719l-.062.312l-.688 3.532l-.312 1.468l1.469-.312l3.53-.688l.313-.062l10.094-10.094c1.16-1.16 1.16-3.09 0-4.25a3.018 3.018 0 0 0-4.219-.031l-3.968 3.969a10.103 10.103 0 0 0-3.032-2A7.024 7.024 0 0 0 20 10c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5zm13 10c.254 0 .52.082.719.281a.977.977 0 0 1 0 1.406l-9.688 9.688l-1.781.375l.375-1.781l9.688-9.688A.934.934 0 0 1 26 15z"/></svg>}
                  />
                  <div className='w-[50%]'>

                  </div>
              </div>
              <div className='pb-6 px-8'>
                <InputBiography
                title="Biografía"
                type="text"
                name="aboutMe"
                id="aboutMe"
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="#666666" d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32ZM124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 120v88a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h88a8 8 0 0 1 0 16H48v160h160v-88a8 8 0 0 1 16 0Z"/></svg>}
                />
              </div>
            </div>
            <div className='flex justify-center items-center mt-4 mx-[30%]'>
              <div className='px-8 w-[50%] flex justify-center items-center'>
                <button className='border border-gray-300 rounded-md p-[6px] bg-white hover:bg-gray-200 text-black hover:scale-105 transition duration-100 ease-in w-full'>Cancelar</button>
              </div>
              <div className='px-8 w-[50%] flex justify-center'>
                <button className='border border-gray-300 rounded-md p-[6px] bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 transition duration-100 ease-in w-full'>Guardar</button>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-screen w-[100%] lg:w-[30%] m-0 mt-6 lg:ml-6">
            <div className='border border-gray-300 flex flex-col rounded-lg'>
              <div className='py-3 px-8 border-b'>
                <h2 className='font-semibold'>Foto de Perfil</h2>
              </div>
              <div className='flex flex-row'>
                <div className='py-3 px-8 flex flex-col justify-center'>
                  <img src={image} alt="" className='w-[70px] rounded-full cursor-pointer'/>
                </div>
                <div className='py-3 flex flex-col'>
                  <span className=''>Cambiar Foto de Perfil</span>
                  <div className='flex flex-row gap-3'>
                    <span className='text-sm text-gray-500'>Subir Foto</span>
                    <input
                      type="file"
                      accept='image/*'
                      style={{ display: 'none' }}
                      id="upload-photo"
                    />
                    <label htmlFor="upload-photo" className='text-blue-400 cursor-pointer text-sm'>Actualizar</label>
                  </div>
                </div>
              </div>
              <div className='py-3 px-8 flex flex-col'>
                <div>
                  <span>Editar Portada</span>
                </div>
                <div className='h-[180px]'>
                  <button className='w-full h-full border-2 border-dashed border-blue-400 hover:bg-gray-300 transition duration-100 ease-in flex flex-col items-center justify-center rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="#666666" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"/>
                    </svg>
                    <span className="text-sm text-gray-500">Subir Portada</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
