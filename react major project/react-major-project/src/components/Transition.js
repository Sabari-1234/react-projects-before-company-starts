import React,{useState, useTransition} from 'react'

function Transition() {
    const [name, setname] = useState('')
    const [list, setlist] = useState([])
    const [ispending,startTransition]= useTransition()
    const handle=(e)=>{
        setname(e.target.value)
        startTransition(()=>{
            var l=[]
            for(var i=0;i<=20000;i++){
                l.push('e.target.value')
            }
            setlist(l)
        
        })
          
       
    }

  return (
    <div>
            <input type="text" value={name} onChange={handle} />
            {
               ispending?<h1>loading</h1>: list.map(item=><li>{item}</li>)
            }
    </div>
  )
}

export default Transition