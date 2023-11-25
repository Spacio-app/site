'use client'

import { useEffect, useState } from 'react'

const Test = () => {
  // Datos de prueba para simular un test
  const testInfo = {
    title: 'Prueba de JavaScript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint maiores eum, velit fugit inventore dolorum ipsa tenetur officiis porro itaque tempora blanditiis repellendus esse, nostrum beatae sequi nam dolores perferendis.',
    questions: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint maiores eum, velit fugit inventore dolorum ipsa tenetur',
        options: ['Roma', 'París', 'Madrid', 'Berlín']
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint maiores eum, velit fugit inventore dolorum ipsa tenetur officiis porro',
        options: ['1945', '1955', '1965', '1975']
      }
      // Agrega más preguntas según sea necesario
    ]
  }

  const [selectedOptions, setSelectedOptions] = useState(
    Array(testInfo.questions.length).fill(null)
  )

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[questionIndex] = optionIndex
    setSelectedOptions(newSelectedOptions)
  }

  // Nuevo estado para los radio buttons
  const [radioSelected, setRadioSelected] = useState(null)

  // Efecto para actualizar el estado cuando cambia el valor seleccionado
  useEffect(() => {
    // Hacer algo con el valor seleccionado, por ejemplo, mostrarlo en la consola
    console.log('Radio button seleccionado:', radioSelected)
  }, [radioSelected])

  return (
    <div className="mx-[25%] my-2 border border-gray-400 px-12">
      <div className="py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{testInfo.title}</h1>
          <p className="text-gray-600 mt-6">{testInfo.description}</p>
        </div>

        {/* Renderiza las preguntas con opciones y radio buttons */}
        {testInfo.questions.map((question, questionIndex) => (
          <div key={question.id} className="mb-6 p-5">
            <h2 className="text-xl font-semibold mb-2">¿{question.text}?</h2>

            {/* Agrega los radio buttons dentro de la lista de opciones */}
            <ul>
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className="list-none cursor-pointer hover:bg-gray-200 flex items-center my-[4px]"
                >
                  <input
                    id={`radio-option-${questionIndex}-${optionIndex}`}
                    type="radio"
                    checked={selectedOptions[questionIndex] === optionIndex}
                    onChange={() => { handleOptionSelect(questionIndex, optionIndex) }}
                    className="w-4 h-4 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor={`radio-option-${questionIndex}-${optionIndex}`}
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Test
