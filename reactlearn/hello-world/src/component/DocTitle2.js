import React,{useState} from 'react'
import useDocTitle from '../CustomHook/useDocTitle'

function DocTitle2() {
    const [count, setcount] = useState(0)
    useDocTitle(count)
    
  return (
    <div>
       count- {count}
       <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default DocTitle2