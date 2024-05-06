import React, { Component } from 'react'
import CompB from './CompB'

class CompA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'sabari'
      }
      console.log('constructor A')
    }
   static getDerivedStateFromProps(props,state){
        console.log('getderived A')
        return null
   }
   componentDidMount(){
    console.log('didmount A')
   }

  render() {
    console.log('render A')
    return (
      <div>CompA
        <CompB/>
      </div>
      
    )
  }
}


export default CompA