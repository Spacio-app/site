import { auth } from 'auth'
import Image from 'next/image'

const Sidebar = async () => {
  const session = await auth()
  const { name, image } = session?.user as any

  return (
    <div className="h-screen flex flex-col gap-4 px-2">
      <div className='border-b w-full flex justify-center border-gray-300 py-3'>
        <div className="flex flex-col items-center w-[350px] p-3 rounded-xl h-[180px] hover:bg-slate-100">
          <div className="h-[60%] flex justify-center items-center">
            <a href="">
              <Image src={image} alt="" width={1000} height={1000} className="rounded-full w-[60px] h-fit" />
            </a>
          </div>
          <div className="font-medium text-sm text-center h-[40%] flex justify-center items-center">
            <span>
              <a href=""></a>
              {name}
            </span>
          </div>
        </div>
      </div>
      <div className='flex gap-2 px-3 hover:bg-gray-200 rounded-[10px]'>
        <div className='flex justify-center items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
          >
            <path
              fill="#666666"
              d="m16 3.875l-.438.219L5.563 9L5 9.281V11h22V9.281L26.437 9l-10-4.906zm0 2.25L21.875 9h-11.75zM7 12v10H6v2h20v-2h-1V12h-2v10h-2V12h-2v10h-2V12h-2v10h-2V12h-2v10H9V12zM4 25v2h24v-2z"
            />
          </svg>
        </div>
        <div>
          <div className='font-medium'>
            <span>Antonio Varas</span>
          </div>
        </div>
      </div>
      <div className='flex gap-2 px-3 hover:bg-gray-200 rounded-[10px]'>
        <div className='flex justify-center items-center'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#666666"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M22 10v6M2 10l10-5l10 5l-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </g>
          </svg>
        </div>
        <div>
          <div className='font-medium'>
            <span>Ingeniería en Informática</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
