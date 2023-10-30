'use client'

import { useForm, type SubmitHandler, useFieldArray } from 'react-hook-form'
import axios from 'axios'
import { Fragment } from 'react'

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
    <div className='bg-indigo-100 flex flex-row justify-center items-center p-2 gap-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-2">
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
            <div className="mb-2">
                <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Descripcion de la Prueba
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register('description', { required: false })}
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="miniature"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Miniatura del curso
                </label>
                <input
                    type="file"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register('miniature', { required: false })}
                />
            </div>
            <div> LISTA DE PREGUNTAS </div>
            {
                questionsFields.map((question, index) => (
                  <Fragment key={index}>
                    <div className="mb-2">
                      <label
                        htmlFor={`questions.${index}.questionText`}
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Pregunta
                      </label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register(`questions.${index}.questionText`, { required: false })}
                      />
                    </div>
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" type="button" onClick={() => { remove(index) }}>
                      Eliminar pregunta
                    </button>
                    <div>
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="mb-2">
                          <label
                            htmlFor={`questions.${index}.options.${optionIndex}.optionText`}
                            className="block text-sm font-semibold text-gray-800"
                          >
                            Opción {optionIndex + 1}
                          </label>
                          <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register(`questions.${index}.options.${optionIndex}.optionText`, { required: false })}
                          />
                          <div className="flex items-center my-4 justify-center">
                            <input id="default-checkbox"
                              type="checkbox"
                              {...register(`questions.${index}.options.${optionIndex}.isCorrect`, { required: false })}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Respuesta correcta</label>
                          </div>
                        </div>
                      ))}
                      {question.options.length < 5 && (
                        <button
                          type="button"
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                          onClick={() => { addOptionToQuestion(index) }}
                        >
                          Agregar opción
                        </button>
                      )}
                    </div>
                </Fragment>
                ))
            }
            <button
                type="button"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                onClick={() => {
                  appendQuestion({
                    questionText: '',
                    options: []
                  })
                }}
                >
                Agregar pregunta
            </button>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}

export default FormTest
