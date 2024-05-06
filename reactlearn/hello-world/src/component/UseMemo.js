import React,{ useMemo, useState} from 'react'

function UseMemo() {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)
    const count=useMemo(()=>{
      let i=0
      while(i<900000000)i++
      return count1%2===0
  },[count1]) 
  return (
    <div>
        <button onClick={()=>setcount1(count1=>count1+1)}>count1: {count1}</button>
        {count?'even':'odd'}
        <button onClick={()=>setcount2(count2=>count2+1)}>count2: {count2}</button>
    </div>
  )
}

export default UseMemo