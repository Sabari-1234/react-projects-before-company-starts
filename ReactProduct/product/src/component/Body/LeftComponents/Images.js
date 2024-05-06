import React,{useContext} from 'react'
import { Context } from '../Body'



function Images({img}) {
 const setimages = useContext(Context)
    
  return (
    <img src={img} alt="" onClick={()=>setimages(img)}/>
    
    )
}

export default Images