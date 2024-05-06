import React,{useState} from 'react'
import Row from './Row'

function Calculator() {
  const [input, setinput] = useState('')
  const prop=[
    {
      a:'7',
      b:'8',
      c:'9',
      d:'+'
    },
   {
      a:'4',
      b:'5',
      c:'6',
      d:'-'
    },
    {
      a:'1',
      b:'2',
      c:'3',
      d:'*'
    },
    {
      a:'C',
      b:'0',
      c:'=',
      d:'/'
    }
  ]
  return (
    <div className='container bg-dark'>
      <div className='empty'>
        
      </div>
      <div className='row'>
        <input type="text" autoFocus value={input} onChange={e=>e.target.value}/>
      </div>
      <div className='row'>
        <button className='col  bg-dark text-white' onClick={()=>setinput('')}>CLEAR</button>

      </div>
      {
        prop.map((item,index)=><Row {...item} input={input} setinput={setinput} key={index}/>)
      }
  </div>
  )
}

export default Calculator