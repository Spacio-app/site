// PostFeed.tsx

'use client'

import React, { useState } from 'react'
import UserProfile from './UserProfile'
import PostContent from './PostContent'
import ButtonComment from './ButtonComment'
import Comments from './Comments'
import Button from './Button'
import WriteComment from './WriteComment'
import ShareButton from './ShareButton'

function PostFeed ({
  session,
  id,
  title,
  description,
  comments = [], // Cambia a un array de comentarios
  author,
  contenttype,
  createdat
}: any) {
  const [commentsOpen, setCommentsOpen] = useState(false)

  const toggleComment = () => {
    setCommentsOpen(!commentsOpen)
  }

  // Esto es porque por alguna razón no funcionaban los % y chatgpt me dio esta opción xd
  let buttonWidth = '50%' // Valor por defecto

  if (contenttype === 'course') {
    buttonWidth = '33.3%' // Valor para el caso 'course'
  }

  return (
    <div className="border border-gray-300 flex-row md:flex rounded-xl">
      <div className="md:w-[100%] shadow-xl rounded-xl">
        <UserProfile createdAt={createdat} author={author} />
        <PostContent
          titlePublication={title}
          text={description}
          imageSrc={''}
        />
        <div className="px-6 py-3 flex">
          {contenttype === 'course' && (
            <div
              style={{ width: buttonWidth }}
              className="flex justify-center border-r border-gray-300"
            >
              <Button text={'Ver Curso'} url={`courses/${id}`} />
            </div>
          )}
          <div
            style={{ width: buttonWidth }}
            className="flex justify-center border-r border-gray-300"
          >
            <ButtonComment
              texto={commentsOpen ? 'Cerrar Comentarios' : 'Ver Comentarios'}
              onClick={toggleComment}
            />
          </div>
          <div
            style={{ width: buttonWidth }}
            className="flex justify-center border-l border-gray-300"
          >
            <ShareButton url={'#'} text={'Compartir Enlace'} />
          </div>
        </div>
        {commentsOpen && (
          <>
            <div className="border-t border-gray-300 max-h-[500px] overflow-auto">
              { comments
                ? comments.map((comment: any, index: any) => (
                <Comments
                  key={index}
                  commentAuthor={{
                    authorName: comment.author.name || '',
                    authorAvatar: comment.author.photo || ''
                  }}
                  comment={comment.comment || ''}
                />
                ))
                : null}
            </div>
            <div>
              <WriteComment id={id} session={session} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PostFeed
