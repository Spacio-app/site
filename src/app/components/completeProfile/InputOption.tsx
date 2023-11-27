'use client'

import { type ReactNode, useState } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  title: string
  options: Option[]
  svg: ReactNode
  id: string
  register: any
}

const InputOption: React.FC<SelectProps> = ({ title, options, svg, id, register }) => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="flex flex-col w-[100%] xl:w-[50%]">
      <label htmlFor="career" className="mb-2">
        {title}
      </label>
      <div className="relative">
        <select
          id={id}
          className="border rounded-sm p-3 text-sm pl-10 w-full"
          {...register}
        >
          <option value="">Seleccione una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          {svg}
        </div>
      </div>
    </div>
  )
}

export default InputOption
