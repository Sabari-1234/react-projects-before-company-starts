import React, { useState } from 'react'

function HookCount() {
    const [count,setCount]=useState(0)
  return (
    <button onClick={()=>setCount(count+1)}>count{count}</button>
  )
}

export default HookCount