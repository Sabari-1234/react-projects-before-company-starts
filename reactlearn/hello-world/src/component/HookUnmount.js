import React, { useState } from 'react'
import Hookmouse from './Hookmouse'

function HookUnmount() {
    const [but,setbut]=useState(true)
  return (
    <div>
        <button onClick={()=>setbut(!but)}>toggle</button>
    {but && <Hookmouse/>}
    </div>
    
  )
}

export default HookUnmount