import React from 'react'

function Legend({legend,legendPosition}) {
  return (
    <div className={`mb-3 mt-2 ms-3 me-3 d-flex ${legendPosition}`}>
        <div>
        <legend>{legend}</legend>
        </div>
    </div>
  )
}

export default Legend