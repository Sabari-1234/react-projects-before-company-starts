import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetData() {
    const [posts,setPosts]=useState({})
    const [num,setNum]=useState(1)
    const[numByFetch,setNumByFetch]=useState(1)
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${numByFetch}`)
      .then((response)=>{
        console.log(response)
        setPosts(response.data)

      })
      .catch(error=>{
        console.log('error')
      })
    
      
    },[numByFetch])
    


  return (
    <div>
        <input type={'number'} value={num} onChange={(e)=>setNum(e.target.value)}/>
        <button onClick={()=>setNumByFetch(num)}>fetch</button>
        <ul>
            {
                <li>{posts.title}</li>
            }

        </ul>
           
    </div>
  )
}

export default GetData