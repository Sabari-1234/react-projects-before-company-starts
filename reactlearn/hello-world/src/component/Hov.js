import React, { Component } from 'react'
import Hoc from './Hoc'

class Hov extends Component {
  render() {
    return (
      
      <h1 onMouseOver={this.props.counter}>hovered {this.props.count}</h1>
      
    )
  }
}

export default Hoc(Hov,2)