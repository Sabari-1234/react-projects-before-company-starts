import React, { Component } from 'react'
import { UserConsumer } from './Context'

export class CompF extends Component {
  render() {
   return(
      <UserConsumer>
        {
            name=>{
                return <h1>hello {name}</h1>
            }
        }
      </UserConsumer>
   )
  }
}

export default CompF