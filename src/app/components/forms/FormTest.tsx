'use client'

import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import axios from 'axios'
import { Fragment } from 'react'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'

// axios.interceptors.response.use(function (response) {
//   // Optional: Do something with response data
//   return response
// }, async function (error) {
//   // Do whatever you want with the response error here:

//   // But, be SURE to return the rejected promise, so the caller still has
//   // the option of additional specialized handling at the call-site:
//   return Promise.reject(error)
// })

const FormTest = () => {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: '',
      description: '',
      miniature: '',
      questions: [
        {
          questionText: '',
          options: [
            {
              optionText: '',
              isCorrect: false
            },
            {
              optionText: '',
              isCorrect: false
            }
          ]
        }
      ]
    }
  })

  const { fields: questionsFields, remove, append: appendQuestion } = useFieldArray({
    name: 'questions',
    control
  })

  const addOptionToQuestion = (questionIndex: any) => {
    const newOption = {
      optionText: '',
      isCorrect: false
    }
    const updatedQuestions = [...questionsFields]
    updatedQuestions[questionIndex].options.push(newOption)
    setValue('questions', updatedQuestions)
  }

  const onSubmit = async (data: any) => {
    data.contentType = 'test'
    data.author = 'Author 1'

    console.log(data)

    axios.post('http://127.0.0.1:3001/contentTest', data)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className='border-b text-xl font-semibold text-center py-4'>
              <h2>Crear Prueba</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-4 mx-10 mt-4'>
              <div>
                <div className="w-auto">
                    <label
                        htmlFor="title"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Titulo de la Prueba
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('title', { required: true })}
                    />
                </div>
                <div className="w-auto">
                    <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Descripción de la Prueba
                    </label>
                    <textarea
                        placeholder='Descripción de la prueba'
                        className="block w-full px-4 py-6 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('description', { required: false })}
                    />
                </div>

              </div>
              <div>

                <h2 className='text-lg font-semibold'>LISTA DE PREGUNTAS</h2>
                <div className='grid grid-cols-4'>
                  {
                      questionsFields.map((question, index) => (
                        <Fragment key={index}>
                          <div className='border border-gray-300 shadow-xl'>
                            <div className='p-4'>
                                <label
                                  htmlFor={`questions.${index}.questionText`}
                                  className="block text-sm font-semibold text-gray-800"
                                >
                                  Pregunta
                                </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                  {...register(`questions.${index}.questionText`, { required: false })}
                                />
                                <button className="hover:scale-125 transition duration-150 ease-in w-[30px] h-[30px] text-red-500 cursor-pointer transition-colors" type="button" onClick={() => { remove(index) }}>
                                  <TrashIcon />
                                </button>
                              </div>
                            </div>
                            <div className='px-4 pt-0'>
                              {question.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="mt-2">
                                  <label
                                    htmlFor={`questions.${index}.options.${optionIndex}.optionText`}
                                    className="block text-sm font-semibold text-gray-800"
                                  >
                                    Opción {optionIndex + 1}
                                  </label>
                                  <div className='flex gap-2'>
                                    <input
                                      type="text"
                                      className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                      {...register(`questions.${index}.options.${optionIndex}.optionText`, { required: false })}
                                    />
                                    <div className="flex items-center mt-2">
                                      <input id="default-checkbox"
                                        type="checkbox"
                                        {...register(`questions.${index}.options.${optionIndex}.isCorrect`, { required: false })}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      {/* <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-600">Respuesta correcta</label> */}
                                    </div>
                                  </div>
                                </div>
                              ))}
                              {question.options.length < 5 && (
                                <div className='text-center mt-2'>
                                  <div className='text-sm text-gray-400'>Agregar opción</div>
                                  <button
                                    type="button"
                                    className="text-black cursor-pointer text-xl rounded-full w-[30px] h-[30px] transition-colors hover:scale-125 transition duration-150 ease-in"
                                    onClick={() => { addOptionToQuestion(index) }}
                                  >
                                    <PlusCircleIcon />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                      </Fragment>
                      ))
                  }
                  <div className="w-full mx-auto">
                    <button
                        type="button"
                        className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-400 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                        onClick={() => {
                          appendQuestion({
                            questionText: '',
                            options: [
                              {
                                optionText: '',
                                isCorrect: false
                              },
                              {
                                optionText: '',
                                isCorrect: false
                              }
                            ]
                          })
                        }}
                        >
                        Agregar pregunta
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </form>
    </div>
  )
}

export default FormTest
