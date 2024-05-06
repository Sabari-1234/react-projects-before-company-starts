import React,{useState} from 'react'

export const StateRender = () => {
    const [count, setcount] = useState(0)
    console.log('rendered')
  return (
    <div>
            <button onClick={()=>setcount(count+1)}>count-{count}</button>
            <button onClick={()=>setcount(5)}>count-5</button>
            <button onClick={()=>setcount(0)}>count-0</button>
    </div>
  )
}
