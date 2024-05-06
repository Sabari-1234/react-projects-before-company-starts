import React from 'react'
import useCusForm from '../CustomHook/useCusForm'

function Form1() {
    
    
    const [fname,resetfname,bindfname]=useCusForm('')
    const [lname,resetlname,bindlname]=useCusForm('')
    const sub =(e)=>{
        e.preventDefault()
        alert(`welcome ${fname} ${lname}`)
        resetfname()
        resetlname()
    }
  return (
    <form onSubmit={sub}>
        <input type={'text'} placeholder='fname' {...bindfname}></input>
        <input type={'text'} placeholder='lname' {...bindlname}></input>
        <button type={'submit'}>submit</button>
    </form>
  )
}

export default Form1