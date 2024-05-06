import React, { forwardRef,useImperativeHandle } from 'react'

const UseImperativeHandle = forwardRef((props,ref) => {
    const x=1
    useImperativeHandle(
      ref,
      () => ({
        aler:()=>alert('hi'),
        hel,
        x
      })
      
    )
    const hel=()=>{alert('hello')}
  return (
    <div>UseImperativeHandle</div>
  )
})

export default UseImperativeHandle