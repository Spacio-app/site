'use client'

import { useEffect, useRef, useState } from 'react'
// import ReactPlayer from 'react-player'

interface VideoType {
  title: string
  desc: string
  url: string
  publicidcloudinary: string
  miniatureVideo: string
}

const Video = ({ videoUrl }: { videoUrl: VideoType }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    console.log('videoURL', videoUrl.url)
    videoRef.current?.load()
  }, [videoUrl])

  return (
    <video ref={videoRef} controls width="100%" height="100%" className="max-h-[550px] border border-gray-300 rounded-3xl h-[550px]">
      <source src={videoUrl.url} type="video/mp4" />
      Tu navegador no admite la reproducción de videos.
    </video>
  //   <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
  )
}

export default Video
