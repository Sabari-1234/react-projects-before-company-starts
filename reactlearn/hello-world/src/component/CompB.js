import React, { Component } from 'react'

class CompB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'sabari'
      }
      console.log('constructor B')
    }
   static getDerivedStateFromProps(props,state){
        console.log('getderived B')
        return null
   }
   componentDidMount(){
    console.log('didmount B')
   }

  render() {
    console.log('render B')
    return (
      <div>CompB</div>
    )
  }
}


export default CompB