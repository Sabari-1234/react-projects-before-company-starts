import React, { useContext } from 'react'
import { mouthEyeContext } from '../../../../pages/EmojiMaker'


function Buttons({item}) {
  const buttonEvent = useContext(mouthEyeContext)
  const fun=()=>{
    if(buttonEvent.page===2){
      buttonEvent.seteyestyle(item)
      buttonEvent.setpage(3)
    }
    if(buttonEvent.page===3){
      buttonEvent.setmouthstyle(item)
    }
  }
  
  return (
    <div className=' rounded SelectButtons col m-3 d-flex align-items-center justify-content-center shadow' onClick={fun}><h1>{item}</h1></div>
  )
}

export default Buttons