import React from 'react'

function SubmitButtons({ButtonName,func}) {
  return (
    <>
        <input type="submit" value={ButtonName} className='btn  me-5 mb-4 button ms-5' onClick={func} />
    </>
  )
}

export default SubmitButtons