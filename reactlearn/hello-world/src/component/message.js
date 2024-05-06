import React, { Component } from "react";
class Message extends Component{

    constructor(){
        super()
        this.state={
            mess:'welcome visitor'
        }
    }

    buttonClick=()=>{
        this.setState({
            mess:'thanks for subscribing'
        })

    }
    render(){
        const {mess}=this.state
        return(
            <div>
                 <h1>{mess}</h1>
                 <button onClick={this.buttonClick}>subscribe</button>
            </div>
           
        )
    }

}
export default Message