import React, { Component } from 'react'
import CompD from './CompD'
import { UserConsumer } from './Context'

export class CompC extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (name)=>{
                  return  <div> <CompD/><h1>hi {name}</h1></div>
     
                }
            }
        </UserConsumer>

    )
  }
}

export default CompC