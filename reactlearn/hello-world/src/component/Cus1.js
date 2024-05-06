import React from 'react'
import useCus from '../CustomHook/useCus'

function Cus1() {
    const initial=0
    const value=1
    const [count,increment,decrement,reset]= useCus(initial,value)
  return (
    <div>
        count = {count}<br/>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Cus1