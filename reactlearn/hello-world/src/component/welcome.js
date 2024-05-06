import React, { Component } from "react";

class Welcome extends Component{
    render(){
        const {name,age}=this.props
        return <h1>welcome {this.props.name} age {this.props.age}</h1>
    }
}
export default Welcome