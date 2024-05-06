import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:true
      }
    }
  render() {
   /* if(this.state.isloggedin){
        return <div>welcome sabari</div>
    }
    else{
        return <div>please login</div>
    }
    let message
    if(this.state.isloggedin){
        message= <div>welcome sabari</div>
    }
    else{
        message= <div>please login</div>
    }
    return message*/
    //return this.state.isloggedin?<div>welcome sabari</div>:<div>please login</div>
    return this.state.isloggedin && <div>welcome sabari</div>
  }
}

export default ConditionalRendering