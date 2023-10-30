'use client'

import CommentAuthor from './CommentAuthor'

function CreatePost () {
  return (
        <div className="border border-gray-300 flex-col p-4 space-y-3 rounded-xl">
            <div className="w-[100%] flex">
                <CommentAuthor authorAvatar="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg" />
                <input type="text" placeholder="Título de la publicación" className="flex-1 px-3 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%]" />
            </div>
            <div className="w-[100%] h-[50px]">
                <input type="text" placeholder="Descripción..." className="flex-1 px-3 py-2 rounded-2xl bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-[100%] h-[100%]" />
            </div>
        </div>
  )
}
export default CreatePost
