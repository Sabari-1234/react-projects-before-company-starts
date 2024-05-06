import React from 'react';
import { print } from './utility';
import classes from './cards.module.scss'


const BlogCard =(props)=>{
 
      //print(props)
      console.log('child render')
 
    return(
      <div className={classes.a}>
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        <p>likecount:{props.like}</p>
        <button onClick={props.likeco}>like</button>
        
      </div>
      )
  }

export default BlogCard