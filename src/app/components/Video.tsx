'use client'
// import ReactPlayer from 'react-player'

const Video = ({ videoUrl }: any) => {
  console.log(videoUrl)
  return (
  <video controls width="100%">
      <source src={videoUrl} type="video/mp4" />
      Tu navegador no admite la reproducción de videos.
  </video>
  //   <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
  )
}

export default Video
