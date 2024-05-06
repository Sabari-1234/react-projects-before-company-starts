import React, { Component } from 'react'
import Funccomp from './Funccomp'

export class Classcomp extends Component {
    constructor(){
        super()
        this.state={
            greet:'sabari'
        }
    }
    funprop=(value)=>{
        alert(`welcome ${this.state.greet} ${value}`)
    }
  render() {
    return (
      <Funccomp funprop={this.funprop}/>
    )
  }
}

export default Classcomp