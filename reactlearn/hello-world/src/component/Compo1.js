import React,{useContext} from 'react'
import { Reduce } from '../App'
import Compo2 from './Compo2'

function Compo1() {
    const reduce = useContext(Reduce)
  return (
    <div>
        count: {reduce.count}
      <button onClick={()=>reduce.dispatch('increment')}>increment</button>
      <button onClick={()=>reduce.dispatch('decreament')}>decreament</button>
      <button onClick={()=>reduce.dispatch('reset')}>reset</button>
        <Compo2/>
    </div>
  )
}

export default Compo1