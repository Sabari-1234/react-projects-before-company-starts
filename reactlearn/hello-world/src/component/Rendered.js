import React, { Component } from 'react'

export class Rendered extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      counter=()=>{
          this.setState((prevstate)=>{
              return{
                  count:prevstate.count+1
              }
              
          })
      }
  render() {
    return (
      this.props.render(this.counter,this.state.count)
    )
  }
}

export default Rendered