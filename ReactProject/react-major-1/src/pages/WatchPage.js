import React from 'react'
import BackButton from '../components/BackButton'
import Heading from '../components/Heading'
import VideoPlayer from '../components/watchPage/VideoPlayer'

function WatchPage() {
  return (
    <div className=' container '>
      <Heading text={'The Video Player'}/>
      <VideoPlayer/>
      <BackButton/>
      
    </div>
  )
}

export default WatchPage