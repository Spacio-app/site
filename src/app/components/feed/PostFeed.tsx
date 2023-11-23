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
import { auth } from 'auth'

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
  const [displayedComments, setDisplayedComments] = useState([])

  const toggleComment = () => {
    setCommentsOpen(!commentsOpen)
    if (!commentsOpen) {
      // Muestra todos los comentarios al expandir la sección
      setDisplayedComments(comments)
    }
  }

  const commentCount = comments.length

  const buttonStyle = comments.length > 1 && !commentsOpen ? 'border-b border-gray-300' : ''

  // Esto es porque por alguna razón no funcionaban los % y chatgpt me dio esta opción xd
  let buttonWidth = '50%' // Valor por defecto

  if (contenttype === 'course') {
    buttonWidth = '33.3%' // Valor para el caso 'course'
  }

  const { name } = session?.user || {}
  const currentUser = { name }

  return (
    <div className="border border-gray-300 flex-row md:flex rounded-xl">
      <div className="md:w-[100%] shadow-xl rounded-xl">
        <UserProfile createdAt={createdat} author={author} currentUser={currentUser} />
        <PostContent
          titlePublication={title}
          text={description}
          imageSrc={''}
        />
        <div className='px-6 py-3 flex'>
          <ButtonComment
            texto={commentsOpen ? 'Cerrar Comentarios' : 'Ver Comentarios'}
            onClick={toggleComment}
          />
        {/* <div className={`px-6 py-3 flex ${buttonStyle}`}> */}
          {/* {contenttype === 'course' && (
            <div
              style={{ width: buttonWidth }}
              className="flex justify-center border-r border-gray-300"
            >
              <Button text={'Ver Curso'} url={`courses/${id}`} />
            </div>
          )} */}
          {/* <div
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
          </div> */}
        </div>
        {commentsOpen && (
          <>
            <div className=" max-h-[300px] md:max-h-[500px] overflow-auto overflow-x-hidden border-t border-gray-300">
              {displayedComments.map((comment: any, index) => (
                <Comments
                  key={index}
                  commentAuthor={{
                    authorName: comment.author.name || '',
                    authorAvatar: comment.author.photo || ''
                  }}
                  comment={comment.comment || ''}
                />
              ))}
            </div>
            <div>
              <WriteComment id={id} session={session} />
            </div>
          </>
        )}
        {comments.length > 2 && !commentsOpen && (
          <div>
            {comments.slice(0, 2).map((comment: any, index: number) => (
              <Comments
                key={index}
                commentAuthor={{
                  authorName: comment.author.name || '',
                  authorAvatar: comment.author.photo || ''
                }}
                comment={comment.comment || ''}
              />
            ))}
            <div className='px-6 py-3 ml-4 text-sm'>
              <button onClick={toggleComment} className="text-gray-500 font-medium flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                  <path fill="#666666" d="m229.66 157.66l-48 48A8 8 0 0 1 168 200v-40h-40A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0a88.1 88.1 0 0 0 88 88h40v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32Z"/>
                </svg>
                {commentsOpen ? 'Ver menos comentarios' : `Ver ${commentCount > 2 ? commentCount - 2 : 0} comentario/s más`}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostFeed
