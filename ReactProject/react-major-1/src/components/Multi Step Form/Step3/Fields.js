import React from 'react'
import Label from '../Label'

function Fields() {
  return (
    <div className='ms-5 me-5 mb-4'>
    <Label name={'Enrolled Program*'}/>
    <select name="program" id="" className=' form-control step3'>
    <option value="Select Program">- Select Program -</option>
        <option value="React Developer">React Developer</option>
        <option value="Angular Developer">Angular Developer</option>
        <option value="Java Developer">Java Developer</option>
    </select>
    </div>
  )
}

export default Fields