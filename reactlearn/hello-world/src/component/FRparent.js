import React, { Component } from 'react'
import FRref from './FRref'

 class FRparent extends Component {
    constructor(props) {
      super(props)
    
     this.inp=React.createRef()
    }
    foc=()=>{
        this.inp.current.focus()
    }
  render() {
    return (
      <>
      <FRref ref={this.inp}/>
      <button onClick={this.foc}>FR focus</button>
      </>
    )
  }
}

export default FRparent