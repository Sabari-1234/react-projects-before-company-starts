import React, { Component } from 'react'
import CompoRef from './CompoRef'

class parent extends Component {
    constructor(props) {
      super(props)
    
     this.foc=React.createRef()
    }
    call=()=>{
        this.foc.current.foc()
    }

  render() {
    return (
      <>
      <CompoRef ref={this.foc}/>
      <button onClick={this.call}>click to focus</button>
      </>
    )
  }
}

export default parent