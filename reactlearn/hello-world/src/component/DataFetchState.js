import axios from 'axios'
import React,{useEffect,useState} from 'react'

function DataFetchState() {
    const [post, setpost] = useState({})
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response)=>{
        setloading(false)
        setpost(response.data)
        
        seterror('')
      })
      .catch(error=>{
        setpost({})
        setloading(false)
        seterror('error')
      })
    
      
    }, [])
    


  return (
    <div>
        
            {loading?<h1>loading</h1>:post.title}
            {error?error:null}
    </div>
  )
}

export default DataFetchState