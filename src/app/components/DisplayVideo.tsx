'use client'
import { useState, useEffect } from 'react'
import Video from './Video'

export const DisplayVideo = ({ videos }: any) => {
  interface VideoType {
    title: string
    desc: string
    url: string
    publicidcloudinary: string
    miniatureVideo: string
  }
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentVideo, setCurrentVideo] = useState<VideoType>(videos[0])

  // const currentVideo = videos[currentVideoIndex]

  const changeVideo = (index: number) => {
    setCurrentVideo(videos[index])
    setCurrentVideoIndex(index)
  }
  useEffect(() => {
    console.log('videos', videos)
  }, [])
  useEffect(() => {
    console.log('currentVideo', currentVideo)
  }, [currentVideo])
  return (
    currentVideo
      ? <div className="w-full">
      <div className="flex-row md:flex h-full gap-3">
        <div className="lg:w-[76%] md:w-[76%] relative group aspect-w-16 aspect-h-9 md:mb-0 lg:mb-0 mb-6">
          <Video videoUrl={currentVideo} />
          <div className="absolute top-0 left-0 group-hover:opacity-100 transition-opacity opacity-0 bg-black text-white p-3 rounded-br-2xl rounded-tl-3xl">
            <p className="font-bold first-letter:capitalize">{currentVideo?.title}</p>
          </div>
          <div className='w-full border border-gray-500 rounded-md px-11 py-4 items-center flex-row md:flex-col mt-6 md:text-justify'>
            <div>
              <h2 className='font-bold'>Descripción de video</h2>
            </div>
            <div>
              <p className='mt-3 first-letter:capitalize'>{currentVideo?.desc}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[24%] md:w-[24%] md:h-[550px] h-full overflow-hidden max-h-[550px] flex flex-col rounded-2xl">
          <div className="p-3 rounded-2xl border-2 border-gray-300">
            <h2 className="font-bold">Contenido del curso</h2>
          </div>
          <div className="mt-5 overflow-y-auto h-[100%]">
            <ul>
              {videos.map((video: VideoType, index: number) => (
                <li key={index} className="items-center flex mt-4" onClick={() => { changeVideo(index) }}>
                  <img
                    src={video.miniatureVideo}
                    alt="FOTO"
                    className="mx-2 border border-gray-500 w-[50px] h-[40px] rounded-full"
                  />
                  <div className="bg-gray-200 p-4 rounded-xl w-full first-letter:capitalize hover:bg-gray-300">
                    <a href="#">{video.title}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
      : <></>
  )
}
