import React, { Component } from 'react';
import BlogCard from './blogCard';
import './App.scss';
import { isArrayEmpty } from './utility';
import classes from './cards.module.scss'


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      showblock:true,
      arr:[
        {
          id:1,
          a:'sabari 1',
          b:'hi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabari',
          likecount:0
        },
        {id:2,
          a:'sabari 2',
          b:'hi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabari',
          likecount:0
        },
        {
          id:3,
          a:'sabari 3',
          b:'hi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabarihi ia m sabari',
          likecount:0
        }
      ]
    }
    console.log('initialized')
  }
  
 

  likeCount=(pos)=>{
    const updateList=this.state.arr
    
    const updateobj=updateList[pos]
   

   updateobj.likecount=updateobj.likecount+1
    updateList[pos]=updateobj
   this.setState({arr:updateList})



  }
  
  
  
  fun=()=>{
   
      this.setState((previous,previousProps)=>{
          return{showblock:!previous.showblock}
      })
    

    

  }
  componentDidMount(){
    console.log('mount')
  }

  render(){
    console.log('rendered')
   const data= isArrayEmpty(this.state.arr)?[]: this.state.arr.map((item,pos)=>{
      return(
        <BlogCard key={pos} title={item.a} para={item.b} likeco={()=>this.likeCount(pos)} like={item.likecount}/>
      
      )
        
      
      
      
  
  
    })
    return (
      <div className={classes.A}>
        <button onClick={this.fun}>{this.state.showblock?'hide':'show'}</button>
         {this.state.showblock? data:null}
      </div>
      
     
      
    );
  }
    
  
 
}

export default App;
