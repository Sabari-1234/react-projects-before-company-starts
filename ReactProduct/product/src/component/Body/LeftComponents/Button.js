import React,{useContext} from 'react'
import { UserContext } from '../Body'

function Button({text,color='btn-secondary'}) {
  const settimeOrRate = useContext(UserContext)
  return (
    <button className={`btn me-3 ${color} mb-3`} onClick={()=>settimeOrRate(text)}>{text}</button>
  )
}

export default Button