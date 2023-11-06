'use client'

function UserProfile ({ author }: any) {
  return (
    <div className="flex border-b border-gray-300 p-3.5">
      <a href="" className="cursor-pointer">
        <img
          src={author.photo}
          alt="FOTO"
          className="mr-3 border rounded-full w-[50px] h-fit"
        />
      </a>
      <div>
        <a href="" className="cursor-pointer"><span className="font-bold">{author.name}</span></a>
        <p className="text-gray-400 text-sm">
          <span>Publicado hace 6 horas</span>
        </p>
      </div>
    </div>
  )
}

export default UserProfile
