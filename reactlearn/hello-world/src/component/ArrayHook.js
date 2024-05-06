import React, { useState } from 'react'

function ArrayHook() {
    const [count,setCount]=useState([])

  return (
    <div>
        <button onClick={()=>setCount([...count,{id:count.length,value:Math.random()}])}>clik</button>
        <ul>
            {
                count.map(item=><li key={item.id}>{item.value}</li>)
            }
        </ul>
    </div>
  )
}

export default ArrayHook