import React from 'react'
import HeadText from '../HeadText'
import ColorCircles from './ColorCircles'

function Page1() {
  const color=['orange','green','red']
  return (
    <>
    <HeadText text={'Select Color'}/>
   
    <div className=' d-flex justify-content-around m-5'>
    {color.map((item,index)=><ColorCircles color={item} key={index}/>)}
    </div>
    
    
    </>
  )
}

export default Page1