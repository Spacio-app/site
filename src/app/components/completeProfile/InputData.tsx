'use client'

function InputData ({ title, placeHolder, svg, type, name, id }: any) {
  return (
    <div className="flex flex-col w-[100] xl:w-[50%]">
      <label htmlFor="name" className="mb-2">
        {title}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={id}
          className="border rounded-sm p-3 text-sm pl-10 w-full"
          placeholder={placeHolder}
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          {svg}
        </div>
      </div>
    </div>
  )
}

export default InputData