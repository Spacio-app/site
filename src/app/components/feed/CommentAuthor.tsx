'use client'

function CommentAuthor ({ authorName, authorAvatar }) {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={authorAvatar}
        alt={`Avatar de ${authorName}`}
        className="w-8 h-8 rounded-full"
      />
      <span className="font-semibold">{authorName}</span>
    </div>
  )
}

export default CommentAuthor
