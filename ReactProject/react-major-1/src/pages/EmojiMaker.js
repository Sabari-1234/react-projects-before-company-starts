import React, { createContext, useEffect, useRef, useState } from 'react'
import EmojiLeft from '../components/EmojiMaker/Left/EmojiLeft'
import EmojiRight from '../components/EmojiMaker/Right/EmojiRight'
import Heading from '../components/Heading'
import BackButton from '../components/BackButton'
export const mouthEyeContext= createContext()
function EmojiMaker() {
  const circle = useRef(null)
  const [page, setpage] = useState(1)
  const [eyestyle, seteyestyle] = useState('')
  const [mouthstyle, setmouthstyle] = useState('')
  
  useEffect(() => {
    if (page===1){
    var element=circle.current.querySelectorAll('.circle')
    var element1=circle.current.querySelectorAll('.rightCircle')
    console.log(element[0])
    console.log(element1[0])
    element[0].addEventListener('click',()=>{
      element1[0].style.visibility='visible'
      element1[0].style.backgroundColor='yellow'
      
      setpage(2)
 
 
   })
   element[1].addEventListener('click',()=>{
    element1[0].style.visibility='visible'
    element1[0].style.backgroundColor='green'
    setpage(2)


 })
 element[2].addEventListener('click',()=>{
  element1[0].style.visibility='visible'
  element1[0].style.backgroundColor='red'
  setpage(2)

})}
else{
  var frontBack=circle.current.querySelectorAll('.frontBack')
  console.log(frontBack)
  frontBack[0].addEventListener('click',()=>{
    if(page===2){
      setpage(1)
    }
    else{
      setpage(2)
    }
    
  }
  )
  frontBack[1].addEventListener('click',()=>{
    setpage(3)
  }
  )



  }
}
  )

  
  return (
    <div className=' container'>
        <Heading text={'The Emoji Maker'}/>
        <div className=' d-flex justify-content-around contain mx-auto' ref={circle}>
          <mouthEyeContext.Provider value={{seteyestyle,setmouthstyle,page,setpage}}>
          <EmojiLeft page={page} />
          </mouthEyeContext.Provider>
          
          <EmojiRight eyestyle={eyestyle} mouthstyle={mouthstyle}/>

        </div>
        <div className='mt-5'>
      <BackButton/>
      </div>

    </div>
  )
}

export default EmojiMaker