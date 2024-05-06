import React from "react";
const UpdatedComponent=(OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
           super(props)
          
            this.state = {
               count:0
            }
          }
          counter=()=>{
              this.setState(prevstate=>{
                  return {count:prevstate.count+1}
                  
              })
          }
        render(){
            return <OriginalComponent count={this.state.count} counter={this.counter}/>
            
        }
       
    }
    return NewComponent
}
export default UpdatedComponent