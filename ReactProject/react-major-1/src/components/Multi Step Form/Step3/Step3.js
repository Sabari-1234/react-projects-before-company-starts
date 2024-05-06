import React from 'react'
import Legend from '../Legend'
import Line from '../Line'
import Fields from './Fields'
import Message from './Message'
import SubmitButtons from '../SubmitButtons'

function Step3({next,prev,notselected,notselected2}) {
  return (
   <form action="" className='form rounded'>
    <fieldset>
        <Legend legend={'Step3'} legendPosition={'justify-content-end'}/>
       <Line/>
       <Fields/>
       {notselected && <p className='ms-5 me-5 mb-4 mes'>Please select the program</p>}
       <Message/>
       {notselected2 && <p className='ms-5 me-5 mb-4 mes'>Please enter message</p>}
       <div className=' d-flex justify-content-between' >
        <SubmitButtons ButtonName={'PREVIOUS'} func={prev}/>
        <SubmitButtons ButtonName={'SUBMIT'} func={next}/>
       </div>
    </fieldset>
   </form>
  )
}

export default Step3