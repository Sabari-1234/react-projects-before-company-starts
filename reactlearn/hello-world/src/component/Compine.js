import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class Compine extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'sabari'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:this.state.name
            })
        }, 2000);
    }
  render() {
    console.log('compine ')
    return (
      <>
      {/*<RegComp name={this.state.name}/>
      <PureComp name={this.state.name}/>*/}
      <Memo name={this.state.name}/>
      </>
    )
  }
}

export default Compine