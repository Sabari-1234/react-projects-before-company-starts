import React from 'react'

function Title() {
    console.log('title')
  return (
    <div>useCallBack hook</div>
  )
}

export default React.memo( Title)