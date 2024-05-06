import React from 'react'
import Label from '../Label'

function Message() {
  return (
    <div className='ms-5 me-5 mb-4'>
        <Label name={'Message*'}/>
        <textarea  cols="30" rows="5" className=' form-control step3'> </textarea>
    </div>
  )
}

export default Message