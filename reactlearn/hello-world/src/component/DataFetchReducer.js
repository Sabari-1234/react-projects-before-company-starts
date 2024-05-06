import axios from 'axios'
import React,{useReducer,useEffect} from 'react'
const initial={
    post:{},
    loading:true,
    error:''
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'success':
            
            return {
                post:action.value,
                loading:false,
                error:''
            }
        case 'error':
            return{
                post:{},
                loading:false,
                error:'error'
            }
    
        default:
            break;
    }

}
function DataFetchReducer() {
    const [state, dispatch] = useReducer(reducer, initial)
    useEffect(() => {
      
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(response=>dispatch({type:'success',value:response.data}))
     .catch(error=>dispatch({type:'error'}))

    }, [])
    
  return (
    <div>
            {state.loading?<h1>loading</h1>:state.post.title}
            {state.error?state.error:null}
    </div>
  )
}

export default DataFetchReducer