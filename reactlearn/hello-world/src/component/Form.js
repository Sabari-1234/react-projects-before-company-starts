import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         mess:'',
         selec:'1option'
      }
    }
    NameChange=(event)=>{
        this.setState({
            name:event.target.value

        })
    }
    NameChange=(event)=>{
        this.setState({
            name:event.target.value

        })
    }
    NameChange=(event)=>{
        this.setState({
            name:event.target.value

        })
    }
    MessChange=(event)=>{
        this.setState({
            mess:event.target.value

        })
    }
    
    Select=(event)=>{
        this.setState({
            selec:event.target.value
        })
    }
    sub=(event)=>{
        event.preventDefault()
        alert(`${this.state.name} ${this.state.mess} ${this.state.selec}`)

    }
  render() {
    const {name,mess,selec}=this.state
    return (
      <form onSubmit={this.sub}>
        <div>
            <label>name</label>
            <input type='text' value={name} onChange={this.NameChange} required/>
        </div>
        <div>
            <label>message</label>
            <textarea value={mess} onChange={this.MessChange}></textarea>
        </div>
        <div>
            <select value={selec} onChange={this.Select}>
                <option>1opiton</option>
                <option>2opiton</option>
                <option>3opiton</option>
            </select>
        </div>
        <button type='submit'>submit</button>

      </form>
    )
  }
}

export default Form