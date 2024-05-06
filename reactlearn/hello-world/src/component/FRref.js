import React from 'react'

const FRref= React.forwardRef((props,ref)=> {
  return (
    <>
    <input type='text' ref={ref}/>
    </>
  )
})

export default FRref