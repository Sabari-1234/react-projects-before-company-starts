import React from 'react'

 function Hoc(OriginalComponent,increment){
   
    
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          counter=()=>{
              this.setState((prevstate)=>{
                  return{
                      count:prevstate.count+increment
                  }
                  
              })
          }
      render() {
        return <OriginalComponent count={this.state.count} counter={this.counter} {...this.props}/>
      }
    }
    
    
  return NewComponent
}

export default Hoc