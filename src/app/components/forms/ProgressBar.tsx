const ProgressBar = ({ progress }: any) => (
  <div className="relative w-[30%] flex justify-center items-center h-4 bg-gray-300 rounded-md overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500 ease-in-out"
      style={{ width: `${progress}%` }}
    />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold">
      {`${progress}%`}
    </div>
  </div>
)

export default ProgressBar
