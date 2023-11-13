'use client'

function ButtonComment ({ texto, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-sm p-2 rounded-xl hover:bg-slate-200 flex items-center gap-2 text-gray-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#666666" d="M496 496h-16a273.39 273.39 0 0 1-179.025-66.782l-16.827-14.584A291.407 291.407 0 0 1 256 416c-63.527 0-123.385-20.431-168.548-57.529C41.375 320.623 16 270.025 16 216S41.375 111.377 87.452 73.529C132.615 36.431 192.473 16 256 16s123.385 20.431 168.548 57.529C470.625 111.377 496 161.975 496 216a171.161 171.161 0 0 1-21.077 82.151a201.505 201.505 0 0 1-47.065 57.537a285.22 285.22 0 0 0 63.455 97l4.687 4.685ZM294.456 381.222l27.477 23.814a241.379 241.379 0 0 0 135 57.86a317.5 317.5 0 0 1-62.617-105.583l-4.395-12.463l9.209-7.068C440.963 305.678 464 262.429 464 216c0-92.636-93.309-168-208-168S48 123.364 48 216s93.309 168 208 168a259.114 259.114 0 0 0 31.4-1.913Z"/></svg>
      {texto}
    </button>
  )
}

export default ButtonComment
