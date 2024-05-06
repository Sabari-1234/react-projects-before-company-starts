import { clear } from '@testing-library/user-event/dist/clear'
import React, { useEffect, useState } from 'react'

function HooksCareless() {
    const [count,setCount]=useState(0)
    
    useEffect(()=>{
        const tick=()=>{
            setCount(count+1)
        }
       
        const interval=setInterval(tick, 1000);
        return ()=>clearInterval(interval)
       
    },[count])
  return (
    <div>{count}</div>
  )
}

export default HooksCareless