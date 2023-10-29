'use client'

function ButtonComment ({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-sm p-2 rounded-xl hover:bg-slate-200"
    >
      {texto}
    </button>
  )
}

export default ButtonComment
