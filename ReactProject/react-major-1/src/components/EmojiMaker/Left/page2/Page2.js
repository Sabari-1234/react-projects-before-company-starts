import React from 'react'
import HeadText from '../HeadText'
import ButtonLayout from './ButtonLayouts/ButtonLayout'


function Page2({item1,item2,heading}) {
  return (
    <>
     <HeadText text={heading}/>
     <ButtonLayout item1={item1} item2={item2}/>

     
    </>
  )
}

export default Page2