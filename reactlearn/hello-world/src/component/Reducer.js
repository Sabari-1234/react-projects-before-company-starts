import React, { useReducer }  from 'react'
const initialValue=0
const reducer=(state,action)=>{
    switch (action) {
            case 'increment':
            return state+1
            
             
            case 'decreament':
             return state-1
            
            case 'reset':
            return initialValue
             
    
            default:
                return state
             
    }

}

function Reducer() {
    const [count, dispatch] = useReducer(reducer,initialValue)

  return (
    <div>
        count:{count}
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decreament')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>

    </div>
  )
}

export default Reducer