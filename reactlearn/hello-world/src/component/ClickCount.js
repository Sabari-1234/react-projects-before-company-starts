import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCount extends Component {
    
  render() {
    return (
      <>
      <button onClick={this.props.counter}>clicked {this.props.count} times</button>
      </>
    )
  }
}

export default UpdatedComponent(ClickCount)
