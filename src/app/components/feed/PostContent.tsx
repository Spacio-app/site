'use client'

import Image from 'next/image'

function PostContent ({ titlePublication, text, imageSrc }: any) {
  const breakClass = shouldApplyBreakClass(text) ? 'break-all' : 'break-normal'
  const breakClass2 = shouldApplyBreakClass(titlePublication) ? 'break-all' : 'break-normal'

  return (
    <div className="px-6 py-3 flex flex-row justify-center lg:justify-between items-start text-justify border-b border-gray-300 gap-2">
      <div>
        <div className={`font-semibold text-sm ${breakClass2}`}>{titlePublication}</div>
        <div className={`mt-3 text-sm ${breakClass}`}>
          <p>{text}</p>
        </div>
      </div>
      {imageSrc && (
        <div className="flex justify-center">
          <Image
            width={150}
            height={150}
            src={imageSrc}
            alt=""
            className="md:max-w-[95%] md:max-h-[355px] max-w-[95%] max-h-[250px] w-fit h-fit rounded-xl border border-gray-300"
          />
        </div>
      )}
    </div>
  )
}

function shouldApplyBreakClass (text: any) {
  const hasSpaces = text.includes(' ')
  return !hasSpaces
}

export default PostContent
