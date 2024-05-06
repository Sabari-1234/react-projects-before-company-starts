import React, { useContext } from 'react'
import { UserChannel, UserContext } from '../App'


function CompoC() {
    const user=useContext(UserContext)
    const channel=useContext(UserChannel)
  return (
    <div>CompoC{user} {channel}</div>
  )
}

export default CompoC