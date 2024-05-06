import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
      super(props)
    
     
        this.text=React.createRef()
       
      
    }
    componentDidMount(){
        this.text.current.focus()
        
    }
    click=()=>{
    this.text.current.style.display='none'
    }
    
  render() {
   
    return (
      <>
      <input type='text' ref={this.text} />
      <button onClick={this.click}>click</button>
      </>
    )
  }
}

export default Refs