import React from 'react'
function Row({a,b,c,d,input,setinput}) {
  const action=(value)=>{
    if( value==='='){
      setinput(eval(input)+'')
    }
    else
    {
      if(value==='C'){
        
        const n=input.length
        setinput(input.substring(0,n-1))
      }
      else{
        setinput(input+value)
      }
    }
   
  }
  const list=[a,b,c,d]
  return (
    <div className='row'>
        {
          list.map((item,index)=> <button className=' col-3  bg-dark text-white' onClick={()=>action(item)} key={index}>{item}</button>)
        }
        
    </div>
  )
}

export default Row