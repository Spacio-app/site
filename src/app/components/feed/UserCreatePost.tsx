'use client'

import Image from 'next/image'

function UserCreatePost ({ authorAvatar }: any) {
  return (
    <div className="flex-shrink-0 mr-2">
      <Image
        width={1000}
        height={1000}
        src={authorAvatar}
        alt={'Avatar del autor'}
        className="w-10 h-fit rounded-full"
      />
    </div>
  )
}
export default UserCreatePost
