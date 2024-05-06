import React from "react";
const Click=()=>{
    const clicked=()=>{
        console.log('clicked')
    }
    return(
        <button onClick={clicked}>cick</button>
    )
}
export default Click