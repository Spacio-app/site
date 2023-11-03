'use client'

function UserProfile ({ userName }: any) {
  return (
    <div className="flex border-b border-gray-300 p-3.5">
      <img
        src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
        alt="FOTO"
        className="mr-3 border rounded-full w-[50px] h-fit"
      />
      <div>
        <span className="font-bold">{userName}</span>
        <p className="text-gray-400 text-sm">
          <span>Publicado hace 6 horas</span>
        </p>
      </div>
    </div>
  )
}

export default UserProfile
