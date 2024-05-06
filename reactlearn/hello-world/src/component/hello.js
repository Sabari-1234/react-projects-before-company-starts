import React from "react";

const Hello=(props)=>{
    const {name,age}=props
    return(
        <div>
                 <h1>hello {name} age {age}</h1>
                 {props.children}
        </div>
       

    )
}
export default Hello