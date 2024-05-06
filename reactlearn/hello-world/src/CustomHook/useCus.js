import {useState} from 'react'

function useCus(initial,value) {
    const [count, setcount] = useState(initial)
    const increment=()=>{
        setcount(count+value)
    }
    const decrement=()=>{
        setcount(count-value)
    }
    const reset=()=>{
        setcount(initial)
    }
    return [count,increment,decrement,reset]
}


export default useCus