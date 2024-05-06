import React, { useEffect, useRef } from 'react'
import Textbox from '../Textbox'
import Legend from '../Legend'
import SubmitButtons from '../SubmitButtons'
import Line from '../Line'


function Forms({text1,text2,text3,textLegend,buttonalign,legendPosition ,step,next,p,p1,prev}) {
  

    
 

  
  
 
  return (
    
        <form action="" className='form rounded'>
          <fieldset>
           <Legend legend={textLegend} legendPosition={legendPosition}/>
          <Line/>
          <Textbox name={text1}/>
          <p className='ms-5 me-5 mb-4 mes'>{p}</p>
          <Textbox name={text2}/>
          <Textbox name={text3}/>
          <p className='ms-5 me-5 mb-4 mes'>{p1}</p>
          
          <div className={`d-flex ${buttonalign}`}>
            {
              step===2&&<SubmitButtons ButtonName={'PREVIOUS'} func={prev}/>
            }
          
          <SubmitButtons ButtonName={'NEXT'} func={next}/>
          </div>
       
          </fieldset>
          
        </form>
  
  )
}

export default Forms