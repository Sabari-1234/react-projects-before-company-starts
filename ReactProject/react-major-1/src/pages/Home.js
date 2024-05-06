import React from 'react'
import Heading from '../components/Heading'
import Box from '../components/Home/Box'

function Home() {
  return (
    <div className=' container'>
        <Heading text={'JavaScript Assessment'}/>
        <div className=' d-flex justify-content-around boxContainer ps-5 pe-5 me-5 ms-5'>
        <Box text={'Emoji Maker'}/>
        <Box text={'Quiz App'}/>
        <Box text={'Watch Page'}/>
        <Box text={'Multi Step Form'}/>

        </div>
        

    </div>
  )
}

export default Home