import React from 'react'

function ListRenderinng(props) {
    const {name,age}=props.value
  return (
    <div><h1>name {name} age {age}</h1></div>
  )
}

export default ListRenderinng