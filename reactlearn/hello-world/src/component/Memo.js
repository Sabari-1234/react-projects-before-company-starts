import React from 'react'

function Memo(props) {
    console.log('memo')
  return (
    <div>Memo {props.name}</div>
  )
}

export default React.memo(Memo)