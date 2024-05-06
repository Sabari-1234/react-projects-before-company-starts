import React, { useState } from 'react'
import Heading from '../components/Heading'
import Forms from '../components/Multi Step Form/form1/Forms'
import Step3 from '../components/Multi Step Form/Step3/Step3'
import BackButton from '../components/BackButton'
import { useRef } from 'react'
import FinalPage from '../components/Multi Step Form/FinalPage'

function MultiStepForm() {
  const [step, setstep] = useState(1)
  const inputref = useRef(null)
  const step3ref= useRef(null)
  const [p, setp] = useState('')
  const [p1, setp1] = useState('')
  const [notselected, setnotselected] = useState(false)
  const [notselected2, setnotselected2] = useState(false)
  
  
  const [a, seta] = useState('')
  const [b, setb] = useState('')
  const [c, setc] = useState('')
  const [d, setd] = useState('')
  const [e1, sete1] = useState('')
  const [f, setf] = useState('')
  
  
 
  const [visibility1, setvisibility1] = useState('visible')
   const [visibility2, setvisibility2] = useState('visually-hidden')
   const [visibility3, setvisibility3] = useState('visually-hidden')
  
    
    if(step===1){
      var next=(e)=>{
      var element=inputref.current.querySelectorAll('input')
      e.preventDefault()
      
     
      var flag=0
      //console.log(element[0].value)
      if(/^[w]{0,}$/.test(element[0].value)){
        setp("This field cannot be empty")
      }

      else{
        if(/^[a-z][\w_]{0,}[\S]$/i.test(element[0].value)){
          
          setp('')
          flag+=1
      }
      else{
        setp("Please enter a valid user name")
      }
      }
      if(/^[w]{0,}$/.test(element[2].value)){
        setp1("This field cannot be empty")
      }

      else{
        if(/^[a-z][\w_]{0,}[\S]@gmail.com$/i.test(element[2].value)){
          
          setp1('')
          flag+=1
      }
      else{
        setp1("Please enter a valid email address")
      }
      }
      console.log(flag)
      if(flag===2){
        setstep(2)
        seta(element[0].value)
        setb(element[1].value)
        setc(element[2].value)
       
        element[0].value=d
        element[1].value=e1
        element[2].value=f
      }}
     
    }
    if(step===2){
      
     
      next=(e)=>{
      var element=inputref.current.querySelectorAll('input')
       
      e.preventDefault()
      
      
     
      var flag=0
      //console.log(element[0].value)
      if(/^[w]{0,}$/.test(element[0].value)){
        setp("This field cannot be empty")
      }

      else{
        if(/^(\+91)?[0-9]{10}$/.test(element[0].value)){
         
          setp('')
          flag+=1
      }
      else{
        setp("Please enter a valid phone number")
      }
      }
      if(/^[w]{0,}$/.test(element[2].value)){
        setp1("This field cannot be empty")
      }

      else{
        if(/^[a-z]{1,}$/i.test(element[2].value)){
         
          setp1('')
          flag+=1
      }
      else{
        setp1("Please enter a valid country name")
      }
      }
      console.log(flag)
      if(flag===2){
        
        
      setstep(3)
      setvisibility1('visually-hidden')
      setvisibility2('visible')
       
       
       
       
      }}
      var prev=(e)=>{
        e.preventDefault()
        setstep(1)
        
        var element=inputref.current.querySelectorAll('input')
        setd(element[0].value)
        sete1(element[1].value)
        setf(element[2].value)
        element[0].value=a
        element[1].value=b
        element[2].value=c

      }

     
    }
    if(step===3){
      next=(e)=>{
        e.preventDefault()
        var element=step3ref.current.querySelectorAll('.step3')
        console.log(element)
        console.log(element[0].value)
        console.log(element[1].value)
        var flag=0
        if(/Select Program/.test(element[0].value)){
            setnotselected(true)
        }
        else{
          flag+=1
          setnotselected(false)
        }
        if(/[\S]/.test(element[1].value)){
            flag+=1
            setnotselected2(false)
        }
        else{
          setnotselected2(true)
        }
        if(flag===2){
          setvisibility2('visually-hidden')
          setvisibility3('visible')
        }
      }
      prev=(e)=>{
        e.preventDefault()
        setstep(2)
        setnotselected(false)
       setvisibility2('visually-hidden')
      setvisibility1('visible')
      }

    }
    

  return (
    <div className='container'>
      <Heading text='The Multi Step Form'/>
      <div className={`d-flex justify-content-center ${visibility1}`} ref={inputref} >
        {
          step===1?<Forms text1={'First Name*'} text2={'Last Name'} text3={'Email*'} textLegend={'step1'}  buttonalign={'justify-content-end'} legendPosition={'justify-content-start'}  step={step} next={next} p={p} p1={p1}/>:<Forms text1={'Contact*'} text2={'City'} text3={'Country*'} textLegend={'step2'}  buttonalign={'justify-content-between'} legendPosition={'justify-content-center' } step={step} next={next} p={p} p1={p1} prev={prev}/>
        }
      </div>
      <div className={`d-flex justify-content-center ${visibility2}`} ref={step3ref}>
         <Step3 next={next} prev={prev} notselected={notselected} notselected2={notselected2}/>

      </div>
      <div className={`d-flex justify-content-center ${visibility3} `}>
      <FinalPage/>
      </div>
      
     
      <div className='mt-5'>
      <BackButton/>
      </div>
     
      
    </div>
  )
}

export default MultiStepForm