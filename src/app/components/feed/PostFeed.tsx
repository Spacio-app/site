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
  userName,
  titlePost,
  text,
  comments, // Cambia a un array de comentarios
  imageSrc,
  postType
}) {
  const [commentsOpen, setCommentsOpen] = useState(false)

  const toggleComment = () => {
    setCommentsOpen(!commentsOpen)
  }

  // Esto es porque por alguna razón no funcionaban los % y chatgpt me dio esta opción xd
  let buttonWidth = '50%' // Valor por defecto

  if (postType === 'course') {
    buttonWidth = '33.3%' // Valor para el caso 'course'
  }

  return (
    <div className="border border-gray-300 flex-row md:flex rounded-xl">
      <div className="md:w-[100%] shadow-xl rounded-xl">
        <UserProfile userName={userName} />
        <PostContent
          titlePublication={titlePost}
          text={text}
          imageSrc={imageSrc}
        />
        <div className="px-6 py-3 flex">
          {postType === 'course' && (
            <div
              style={{ width: buttonWidth }}
              className="flex justify-center border-r border-gray-300"
            >
              <Button text={'Ver Curso'} url={'URL_DEL_CURSO'} />
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
            <ShareButton url={'URL_DEL_POST'} text={'Compartir Enlace'} />
          </div>
        </div>
        {commentsOpen && (
          <>
            <div className="border-t border-gray-300 max-h-[500px] overflow-auto">
              {comments.map((comment, index) => (
                <Comments
                  key={index}
                  commentAuthor={{
                    authorName: comment.authorName || '',
                    authorAvatar: comment.authorAvatar || ''
                  }}
                  comment={comment.commentText || ''}
                />
              ))}
            </div>
            <div>
              <WriteComment />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PostFeed
