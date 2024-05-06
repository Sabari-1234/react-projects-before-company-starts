import React from 'react'
import './style.css'

function Style(props) {
    const sty=props.heading?'heading':''
  return (
    <div>
        <h1 className={`${sty} colo `}>heading</h1>
        <h1 className='warn'>differnnce between module and normal</h1>
        <h1 className={Style.success}>module style not applied for child</h1>
    </div>
  )
}

export default Style