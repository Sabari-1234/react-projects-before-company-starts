import React, { useState } from 'react'

function Hook2() {
    const [count,setCount]=useState(0)
    const fun=()=>{
        for(var i=1;i<=5;i++){
            setCount(count=>count+1)
        }
    }
  return (
    <div>
        count: {count}
        <button onClick={()=>setCount(count=>count+1)}>increase</button>
        <button onClick={()=>setCount(count=>count-1)}>decrease</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <button onClick={fun}>increase 5</button>
    </div>
  )
}

export default Hook2