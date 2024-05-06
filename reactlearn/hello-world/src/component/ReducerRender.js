import React,{ useReducer} from 'react'
const initial=0
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            
           return state+1
        case 'decrement':
            
            return state-1
        case 'reset':
            
            return initial
    
        default:
            return state
    }
}
const ReducerRender = () => {
   
    const [state, dispatch] = useReducer(reducer, initial)
    console.log('render')
    
  return (
    <div>
        count-{state}
        <button onClick={()=>dispatch('increment')}>inc</button>
        <button onClick={()=>dispatch('decrement')}>dec</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default React.memo( ReducerRender)