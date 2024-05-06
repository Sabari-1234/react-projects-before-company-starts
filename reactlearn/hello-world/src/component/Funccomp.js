import React from 'react'

function Funccomp(props) {
  return (
    <button onClick={()=>props.funprop('from funcomp')}>Function props</button>
  )
}

export default Funccomp