import React from 'react'
import { Link } from 'react-router-dom'

function Box({text}) {
  return (
  
  <Link className='box d-flex align-items-center justify-content-center my-auto rounded text-decoration-none' to={`/${text}`}>
        <h4>{text}</h4> 
  </Link>
  )
}

export default Box