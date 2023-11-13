'use client'

function InputBiography ({ title, placeHolder, svg, type, name, id }: any) {
  return (
    <div className="flex flex-col w-full lg:w-full">
      <label htmlFor={id} className="mb-2">
        {title}
      </label>
      <div className="relative">
        <div className="absolute top-5 left-3 transform -translate-y-1/2 pointer-events-none">
          {svg}
        </div>
        <textarea
          name={name}
          id={id}
          className="border rounded-sm p-3 pl-10 text-sm w-full h-[250px] resize-none" // Utilizo <textarea> en lugar de <input>
          placeholder={placeHolder}
          style={{ paddingTop: '9px' }} // Ajusté el estilo de padding superior
        />
      </div>
    </div>
  )
}

export default InputBiography
