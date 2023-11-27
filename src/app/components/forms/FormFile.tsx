'use client'
import { useForm, type SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useRef, useState } from 'react'
import ProgressBar from './ProgressBar'

interface FormData {
  title: string
  description: string
  miniature: FileList
  filesURL: FileList
  createAnnouncement: false
}

const FormFile = ({ session }: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [message, setMessage] = useState('')
  const [documentoCargado, setDocumentoCargado] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true)
    setUploadProgress(0)

    console.log(data)

    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('miniature', data.miniature[0])
    formData.append('filesURL[0][fileURL]', data.filesURL[0])
    formData.append('createAnnouncement', data.createAnnouncement.toString())

    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${session?.accessToken}`,
      User: JSON.stringify(session?.user)
    }

    try {
      const response = await axios.post(
        `${apiBaseUrl}/contentFile`,
        formData,
        {
          headers,
          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total?.valueOf() ?? 1
            const progress = Math.round((progressEvent.loaded / total) * 100)
            setUploadProgress(progress)
          }
        }
      )

      console.log(response.data)
      setMessage('¡Documento subido con éxito!')
    } catch (error) {
      console.error(error)
      setMessage('Error al subir el documento')
    } finally {
      setLoading(false)
      setTimeout(() => {
        setUploadProgress(0)
      }, 1000)
    }
  }

  const handleFileChange = (e: any) => {
    const files = e.target.files
    setValue('filesURL', files)
    setDocumentoCargado(true)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFiles: FileList = e.dataTransfer.files
    setValue('filesURL', droppedFiles)
    setDocumentoCargado(true)
  }

  const selectedFile = watch('filesURL')

  return (
    <div className="">
      <div className="border-b text-xl font-semibold text-center py-4 w-full">
        <h2>Subir documento</h2>
      </div>
      <div className="flex flex-col justify-center items-center h-fit md:h-[500px] mx-[5%] md:mx-[10%] my-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          {!documentoCargado
            ? (
            <><div className='w-[100%] mb-4'>
                <p className='font-medium text-center'>Carga el documento para seguir con el formulario</p>
              </div>
              <div
                className="border shadow-xl rounded-2xl px-6 w-[100%] sm:w-[400px] sm:h-[200px]"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                  <label
                    htmlFor="file"
                    className="cursor-pointer flex mt-6 h-[60px] rounded-xl items-center justify-center bg-red-500 hover:bg-red-400 px-4 shadow-xl gap-4"
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
                        d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" />
                    </svg>
                    <span className="text-white font-semibold text-2xl text-center">
                      Cargar documento
                    </span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx, .xls, .xlsx"
                    className="hidden"
                    {...register('filesURL', { required: true })}
                    onChange={handleFileChange}
                    ref={inputRef} />
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
                </div></>
              )
            : (
            <div className="w-full xl:h-full flex flex-col md:flex-row items-center gap-3">
              <div
                className="xl:w-fit h-[100%] flex flex-col justify-center items-center gap-6 mx-[5%] md:mx-auto"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                <div
                  className="border shadow-xl rounded-2xl px-6 w-fit md:h-[55%] xl:h-[45%]"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  >
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
                      Cargar Documento
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
                      Debe seleccionar un documento.
                    </p>
                  )}
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="text-center mt-4 xl:w-[60%] flex justify-center items-center">
                      <p className="text-slate-500 mb-6 xl:mb-0">
                        También puedes arrastrar el archivo aquí
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center border-t border-gray-300">
                      <div>
                        <p className="text-gray-800 font-semibold">
                          Documento Seleccionado:
                        </p>
                      </div>
                      {selectedFile && (
                        <div className="break-all md:break-normal">
                          <p className="text-indigo-700">
                            {selectedFile[0].name}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="my-6 flex w-[70%] justify-center items-center">
                  <button
                    type="submit"
                    className="w-[50%] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Subir Documento
                  </button>
                  <div className="flex items-center mt-2 w-[50%] justify-center">
                    <input
                      id="checkboxFile"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...register('createAnnouncement', { required: false })}
                    />
                    <label
                      htmlFor="checkboxCourse"
                      className="ml-2 text-sm font-medium text-gray-600"
                    >
                      Publicar al feed
                    </label>
                  </div>
                </div>
              </div>
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
                    Descripción del documento
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
            </div>
              )}
        </form>
        {loading && <ProgressBar progress={uploadProgress} />}
        {message && <div className="text-black font-semibold">{message}</div>}
      </div>
    </div>
  )
}

export default FormFile
