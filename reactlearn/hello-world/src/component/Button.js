import React from 'react'

function Button({fun,children}) {
    console.log(`button ${children}`)
  return (
    <div>
        <button onClick={fun}>{children}</button>
    </div>
  )
}

export default React.memo(Button)