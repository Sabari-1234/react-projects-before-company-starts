import React from 'react'
import ReactDOM from 'react-dom'
function Portal() {
  return ReactDOM.createPortal(
    <h1>Portal-root</h1>,document.getElementById('potal-root')
  )
}

export default Portal