'use client'

import Image from 'next/image'

function CommentAuthor ({ authorAvatar }: any) {
  return (
    <div className="flex-shrink-0 mr-2">
      <img
        src={authorAvatar}
        alt="Avatar del autor"
        className="w-8 h-8 rounded-full"
      />
    </div>
  )
}
export default CommentAuthor
