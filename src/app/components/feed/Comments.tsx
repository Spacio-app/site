'use client'
import CommentAuthor from './CommentAuthor'

function Comments ({ commentAuthor, comment }: any) {
  const breakClass = shouldApplyBreakClass(comment) ? 'break-all' : 'break-normal'

  return (
    <div className="py-2 text-sm flex w-full">
      <div className='flex mx-6 w-full'>
        <CommentAuthor authorAvatar={commentAuthor.authorAvatar} />
        <div className='bg-slate-200 p-4 rounded-xl w-full'>
          <p className="font-semibold">{commentAuthor.authorName}</p>
          <div className={`${breakClass}`}>
            <p>
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function shouldApplyBreakClass (text: any) {
  const hasSpaces = text.includes(' ')
  return !hasSpaces
}

export default Comments
