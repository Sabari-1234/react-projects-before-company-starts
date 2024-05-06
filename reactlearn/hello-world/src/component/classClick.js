import React, { Component } from "react";
class Clickbutton extends Component{
    Clicked=()=>{
        console.log('clicked from class based component')
    }
    render(){
        return(
            <button onClick={this.Clicked}>Click</button>
        )
    }
}
export default Clickbutton