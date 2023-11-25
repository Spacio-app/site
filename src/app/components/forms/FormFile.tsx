'use client'
import { useForm, type SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useRef } from 'react'

interface FormData {
  title: string
  description: string
  miniature: FileList
  filesURL: FileList
}

const FormFile = ({ session }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)

    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('mini', data.miniature[0])
    formData.append('filesURL[0][fileURL]', data.filesURL[0])

    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.accessToken}`,
      User: JSON.stringify(session?.user)
    }

    try {
      const response = await axios.post('http://127.0.0.1:3001/contentFile', formData, {
        headers,
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total?.valueOf() ?? 1
          const progress = Math.round((progressEvent.loaded / total) * 100)
          console.log(`Upload Progress: ${progress}%`)
        }
      })

      console.log(response.data)
      // Puedes manejar la respuesta del backend aquí
    } catch (error) {
      console.error(error)
      // Puedes manejar el error aquí
    }
  }

  const handleFileChange = (e: any) => {
    // Actualiza el valor del campo 'filesURL' cuando se selecciona un archivo
    const files = e.target.files
    setValue('filesURL', files)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFiles: FileList = e.dataTransfer.files
    setValue('filesURL', droppedFiles)
  }

  const selectedFile = watch('filesURL') // Obtiene el archivo seleccionado

  return (
    <div className="border">
      <div className="border-b text-xl font-semibold text-center py-4 w-full">
        <h2>Subir documento</h2>
      </div>
      <div className="flex h-fit xl:h-[500px] mx-auto xl:mx-[10%]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
          <div className="w-full xl:h-full p-6 flex flex-col xl:flex-row items-center gap-3">
            <div className="xl:w-[50%] h-[85%] flex flex-col gap-6">
            <div className="mb-2">
                  <label
                      htmlFor="title"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Titulo del Documento
                  </label>
                  <input
                      type="textarea"
                      className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register('title', { required: true })}
                  />
              </div>
              <div className="">
                <label
                  htmlFor="description"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Descripción del archivo
                </label>
                <textarea
                  className="block w-full resize-none h-[150px] px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register('description', { required: false })}
                />
              </div>
              <div className="w-[100%] xl:w-[60%] h-fit">
                <label
                  htmlFor="thumbnail"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Miniatura
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register('miniature', { required: false })}
                />
              </div>
            </div>
            <div
              className="xl:w-[50%] h-[100%] flex flex-col justify-center items-center gap-6"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="border shadow-xl rounded-2xl px-6 2xl:w-[60%] xl:h-[45%] h-[70%]">
                <label
                  htmlFor="file"
                  className="cursor-pointer flex mt-6 h-[30%] rounded-xl items-center justify-center bg-red-500 hover:bg-red-400 px-4 shadow-xl gap-4"
                  onClick={() => inputRef.current?.click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffff"
                      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                    />
                  </svg>
                  <span className="text-white font-semibold text-2xl">
                    Subir Archivo
                  </span>
                </label>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx, .xls, .xlsx"
                  className="hidden"
                  {...register('filesURL', { required: true })}
                  onChange={handleFileChange}
                  ref={inputRef}
                />
                {errors.filesURL && (
                  <p className="text-red-500 text-sm">
                    Debe seleccionar un archivo.
                  </p>
                )}
                <div className="w-full flex justify-center">
                  <div className="text-center mt-4 xl:w-[60%]">
                    <p className="text-slate-500 mb-6 xl:mb-0">
                      También puedes arrastrar el archivo aquí
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-[60%] h-fit">
                <div>
                  <p className="text-gray-800 font-semibold">
                    Archivo Seleccionado:
                  </p>
                </div>
                {selectedFile && (
                  <div className="">
                    <p className="text-indigo-700">{selectedFile[0].name}</p>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Subir Documento
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormFile
