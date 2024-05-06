import React, { useId} from 'react'

function Questions({questions,option1,option2,option3,option4,correct}) {
    const id=useId()
   
    
    const list=[
        {
            option:option1,
            ID:`${id}option1`,
            key:1
        },
        {
            option:option2,
            ID:`${id}option2`,
            key:2
        },
        {
            option:option3,
            ID:`${id}option3`,
            key:3
        },
        {
            option:option4,
            ID:`${id}option4`,
            key:4
        }
    ]
    
       
       
    

  return (
    <div>
    <h3 className='mt-3'>{questions}</h3>
    {list.map(item=><div key={item.key}><input type="radio" id={item.ID} className=' form-check-input me-2' name={questions} value={item.option} required/><label htmlFor={item.ID} className=' form-check-label mb-3'>{item.option}</label><br/></div>)}
    <hr/>
   
    </div>
  )
}

export default Questions