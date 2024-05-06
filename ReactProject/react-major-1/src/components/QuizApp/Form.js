import React, { useRef,useState} from 'react'
import Questions from './Questions'

function Form() {
const ref=useRef(null)
const [result, setresult] = useState(0)
const [model, setmodel] = useState(null)



  const list=[
    {
      questions:'Q1. what is the value of 2+2?',
      option1:'23',
      option2:'22',
      option3:'4',
      option4:'567',
      id:1
    },
    {
      questions:'Q2. what is the value of 1-8?',
      option1:'23',
      option2:'-7',
      option3:'4',
      option4:'567',
      id:2
    },
    {
      questions:'Q3. what is the value of 2+6?',
      option1:'8',
      option2:'22',
      option3:'4',
      option4:'567',
      id:3
    }
  ]
  
 
  const submitted=(e)=>{
    e.preventDefault()
    
   
    const element=ref.current.querySelectorAll('input')
    console.log(element[5])
    if(element[2].checked){
     setresult(result=>result+1)
    }
    if(element[5].checked){
      setresult(result=>result+1)
    }
    if(element[8].checked){
      setresult(result=>result+1)
    }
    
   
   
    
    
  }
  const fun=()=>{
    const element=ref.current.querySelectorAll('input')
    var count=0
    for(var i=0;i<=11;i++){
      if(element[i].checked){
        count++
        if(count===3){
          setmodel("modal")
        }
      }
    }
    

  }
  
 
  return (
    <div className=' d-flex justify-content-center mb-5'>
         <form className='form p-3 rounded' onSubmit={submitted} ref={ref}>
          {
            list.map(item=><Questions {...item} key={item.id}/>)
          }
          <div className=' d-flex justify-content-center'> 
          <input type="submit" className='btn button' onMouseDown={fun} data-bs-toggle={model}
    data-bs-target="#myModal"/>
          </div>
          
       
    </form>
    
  {/* result window */}
  
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
  
        
        <div className="modal-header">
          <h4 className="modal-title">Your Result:</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>setresult(0)}></button>
        </div>
  
        
        <div className="modal-body">
          Score:{result}/5
          
        </div>
  
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>setresult(0)}>Close</button>
        </div>
  
      </div>
    </div>
  </div>
  
   
    </div>
    
  )
}

export default Form