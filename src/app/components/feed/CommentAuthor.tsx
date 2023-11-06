'use client'

import Image from 'next/image'

function CommentAuthor ({ authorName, authorAvatar }: any) {
  return (
    <div className="flex items-center space-x-2">
      <Image
        width={40}
        height={40}
        src={authorAvatar}
        alt={`Avatar de ${authorName}`}
        className="w-8 h-8 rounded-full"
      />
      <span className="font-semibold">{authorName}</span>
    </div>
  )
}

export default CommentAuthor
