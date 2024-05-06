import React, { Component } from 'react'
import Hoc from './Hoc'

class But extends Component {
   

  render() {
    return (
      <>
      <button onClick={this.props.counter}>clicked {this.props.count} {this.props.name}</button>
      </>
    )
  }
}

export default Hoc(But ,5)