import React, { useReducer }  from 'react'
const initialValue={
    firstCount:0,
    secondCount:0

}
const reducer=(state,action)=>{
    switch (action.type) {
            case 'increment':
            return {...state,firstCount:state.firstCount+action.value}
            
             
            case 'decreament':
             return {...state,firstCount:state.firstCount-action.value}
             case 'increment2':
            return {...state,secondCount:state.secondCount+action.value}
            
             
            case 'decreament2':
             return {...state,secondCount:state.secondCount-action.value}
            
            case 'reset1':
            return {...state,firstCount:initialValue.firstCount}
            case 'reset2':
                return {...state,secondCount:initialValue.secondCount}
            case 'reset':
                return initialValue
             
    
            default:
                return state
             
    }

}

function Counter2() {
    const [count, dispatch] = useReducer(reducer,initialValue)

  return (
    <div>
        count:{count.firstCount}
        count2:{count.secondCount}
        <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
        <button onClick={()=>dispatch({type:'decreament',value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>increment5</button>
        <button onClick={()=>dispatch({type:'decreament',value:5})}>decrement5</button>
        <div>
        <button onClick={()=>dispatch({type:'increment2',value:1})}>increment</button>
        <button onClick={()=>dispatch({type:'decreament2',value:1})}>decrement</button>
        </div>
        <button onClick={()=>dispatch({type:'reset1'})}>reset1</button>
        <button onClick={()=>dispatch({type:'reset2'})}>reset2</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Counter2