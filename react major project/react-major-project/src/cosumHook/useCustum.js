import { useDebugValue, useState } from "react"


function useCustum(count1,name1) {
    const [count, setcount] = useState(count1)
    const [name, setname] = useState(name1)
    useDebugValue({name,count})
    
    useDebugValue(name)
   
    
    return [count,setcount,name,setname]

    
}

    
export default useCustum