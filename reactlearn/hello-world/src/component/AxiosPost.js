import axios from 'axios'
import React, { Component } from 'react'

export class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''

      }
    }
    handle=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }
        submit=(e)=>{
            e.preventDefault()
            axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log('error')
            })
        }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <div>
                userId
                <input type={'number'} value={this.state.userId} onChange={this.handle} name='userId'/>
            </div>
            <div>title
                <input type='text' value={this.state.title} onChange={this.handle} name='title'/>
            </div>
            <div>Body
                <textarea value={this.state.body} onChange={this.handle} name='body'></textarea>
            </div>
            
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default AxiosPost