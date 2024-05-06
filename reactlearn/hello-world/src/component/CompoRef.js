import React, { Component } from 'react'

 class CompoRef extends Component {
    constructor(props) {
      super(props)
    
      this.name=React.createRef()
    }
    foc=()=>{
        this.name.current.focus()
    }

  render() {
    return (
      <>

      <input type='text' ref={this.name}/>
      </>
    )
  }
}

export default CompoRef