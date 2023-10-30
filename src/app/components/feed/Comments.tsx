'use client'
import CommentAuthor from './CommentAuthor'

function Comments ({ commentAuthor, comment }) {
  return (
    <>
    <div className="py-2 text-sm">
      <div className="bg-slate-200 p-4 mx-auto w-[80%] rounded-xl">
        <CommentAuthor
          authorName={commentAuthor.authorName}
          authorAvatar={commentAuthor.authorAvatar}
        />
        <p className='ml-10'>{comment}</p>
      </div>
    </div>
    </>
  )
}

export default Comments
