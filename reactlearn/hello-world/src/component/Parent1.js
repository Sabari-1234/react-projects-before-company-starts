import React,{useCallback, useState} from 'react'
import Title from './Title'

import Count1 from './Count1'
import Button from './Button'



function Parent1() {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(5000)
    const calAge=useCallback(()=>{
        setage(age=>age+1)
    },[age]) 
    const calSalary=useCallback(()=>{
         setsalary(salary=>salary+1000)
    },[salary]) 
    
  return (
    <div>
        <Title/>
        <Count1 text='age' value={age}/>
        <Button fun={calAge}>Age increase</Button>
        <Count1 text='salary' value={salary} />
        <Button fun={calSalary}>salary increase</Button>
        
    </div>
  )
}

export default Parent1