import React, { useId } from 'react'

function UseIdHook() {
   const id= useId()
  return (
    <div>
        <form action="">
            <label htmlFor={`${id}a`}>label for it</label>
            <input type="checkbox" id={`${id}a`}/>
        </form>
    </div>
  )
}

export default UseIdHook