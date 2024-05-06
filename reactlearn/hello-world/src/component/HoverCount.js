import React, { Component } from 'react'
import updatedComponent from './withCounter'
import UpdatedComponent from './withCounter'

 class HoverCount extends Component {
    
  render() {
    return (
      <h1 onMouseOver={this.props.counter}>hover {this.props.count} times</h1>
    )
  }
}

export default UpdatedComponent(HoverCount) 