import React, { Component } from 'react'

class Hov1 extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.counter}>hovered{this.props.count}</h1>
    )
  }
}

export default Hov1