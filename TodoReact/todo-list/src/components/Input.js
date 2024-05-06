import React from 'react'

function Input({setlist,list,input,setinput,inputref}) {
 
  
  
  return (
    <div className='  d-flex justify-content-center mt-5'>
        <input type="text" className=' form-control me-2'value={input} onChange={(e)=>setinput(e.target.value)} ref={inputref} autoFocus required/>
        <button className='btn btn-outline-info' onClick={/[a-z0-9]/ig.test(input)?()=>{setlist([...list,{item:input,id:Math.random(),edit:true}]);setinput('');inputref.current.focus()}:null}>ADD</button>
    </div>
  )
}

export default Input