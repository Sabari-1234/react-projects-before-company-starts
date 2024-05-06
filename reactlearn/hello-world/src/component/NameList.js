import React from 'react'
import ListRenderinng from './ListRenderinng'
function NameList() {
   const person=[{
        id:1,
        name:'sabari',
        age:20
    },
{   id:2,
    name:'malar',
    age:20
}]

const arr=['sabari','kumar']
    const persons=person.map(value=><ListRenderinng key={value.id} value={value}/>)
    const a=arr.map((value,index)=><h1 key={index}>{index} {value}</h1>)
  return (
    <div>
    {persons}
    {a}
    
    </div>

  )
}

export default NameList