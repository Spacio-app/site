'use client'

function WriteComment () {
  return (
        <div className="p-4 border-t border-gray-300">
            <div className="flex items-center space-x-2">
                <img
                    src="https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg" // URL de la imagen de perfil
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                    />
                <input
                    type="text"
                    placeholder="Escribe un comentario..."
                    className="flex-1 px-3 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />
                <button
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
                    >
                    Publicar
                </button>
            </div>
        </div>

  )
}

export default WriteComment
