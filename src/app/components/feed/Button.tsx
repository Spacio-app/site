'use client'

function Button ({ text, url }: any) {
  return (
        <button className="font-semibold text-sm p-2 rounded-xl hover:bg-slate-200">
            <a href={url}>{text}</a>
        </button>
  )
}

export default Button
