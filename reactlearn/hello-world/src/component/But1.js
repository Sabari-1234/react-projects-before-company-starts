import React, { Component } from 'react'

class But1 extends Component {
  render() {
    return (
      <button onClick={this.props.counter}>clicked {this.props.count} </button>
    )
  }
}

export default But1