'use client'

function UserData ({ title, data, svg }: any) {
  return (
    <div className="flex flex-col w-[100%] lg:w-[50%]">
      <label htmlFor="name" className="mb-2">
        {title}
      </label>
      <div className="relative">
        <p className="border rounded-sm p-3 text-sm pl-10 uppercase break-all">{data}</p>
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          {svg}
        </div>
      </div>
    </div>
  )
}

export default UserData
