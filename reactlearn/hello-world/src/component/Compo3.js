import React ,{useContext} from 'react'
import { Reduce } from '../App'

function Compo3() {
    const reduce = useContext(Reduce)
  return (
    <div>
        count: {reduce.count}
      <button onClick={()=>reduce.dispatch('increment')}>increment</button>
      <button onClick={()=>reduce.dispatch('decreament')}>decreament</button>
      <button onClick={()=>reduce.dispatch('reset')}>reset</button>
    </div>
  )
}

export default Compo3