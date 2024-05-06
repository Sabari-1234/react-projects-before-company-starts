import React, { useState,useEffect } from 'react'

function Hookmouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const moveHandle=(e)=>{
        console.log('move')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('effect')
      window.addEventListener('mousemove',moveHandle)
     return ()=>{
        console.log('unmount')
        window.removeEventListener('mousemove',moveHandle)
      }
    
     
    },[])
    
  return (
    <div>
        X-{x}
        Y-{y}

    </div>
  )
}

export default Hookmouse