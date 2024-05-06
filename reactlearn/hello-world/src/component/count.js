import React, { Component } from "react";

class Count extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    count=()=>{
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }),()=>{
            console.log('call back:',this.state.count)
        })
        console.log(this.state.count)
    }

    countFive=()=>{
            this.count()
            this.count()
            this.count()
            this.count()
            this.count()
    }
    render(){
        const {count}=this.state
        return(
        <div>
            <h1>count : {count}</h1>
            <button onClick={this.countFive}>increament</button> 
            </div>

        )
    }
}
export default Count