'use client'

import Image from 'next/image'

function CommentAuthor ({ authorAvatar }: any) {
  return (
    <div className="flex-shrink-0 mr-2">
      <Image
        src={authorAvatar}
        alt={'Avatar del autor'}
        width={1000}
        height={1000}
        className="w-7 h-fit rounded-full mt-[1.5px]"
      />
    </div>
  )
}
export default CommentAuthor
