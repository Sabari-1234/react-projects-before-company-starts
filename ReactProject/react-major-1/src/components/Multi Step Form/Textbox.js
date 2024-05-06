import React from 'react'
import Label from './Label'

function Textbox({name}) {
  return (
    <div className='ms-5 me-5 mb-4'>
        <Label name={name}/>
       
        <input type="text" placeholder={name} className=' form-control'/>
    </div>
  )
}

export default Textbox