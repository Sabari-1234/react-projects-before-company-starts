import React from 'react'

function Count1({text,value}) {
    console.log(`count ${text}`)
  return (
    <div>{text}-{value}</div>
  )
}

export default React.memo(Count1)