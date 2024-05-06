import React, { useEffect, useState } from 'react'

function EffectHook() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
      console.log('hi')
        document.title=`clicked ${count} times`
    },[count])

  return (
    <div>
      <button onClick={()=>setCount(count=>count+1)}>clicked {count} times</button>
    <input type={'text'} value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    
  )
}

export default EffectHook