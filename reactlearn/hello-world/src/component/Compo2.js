import React,{useContext} from 'react'
import { Reduce } from '../App'
import Compo3 from './Compo3'

function Compo2() {
    const reduce = useContext(Reduce)
  return (
    <div>
         count: {reduce.count}
      <button onClick={()=>reduce.dispatch('increment')}>increment</button>
      <button onClick={()=>reduce.dispatch('decreament')}>decreament</button>
      <button onClick={()=>reduce.dispatch('reset')}>reset</button>
        <Compo3/>
    </div>
  )
}

export default Compo2