import React,{useDeferredValue, useEffect,useState,useMemo} from 'react'

function Defferedvalue({name}) {
    
   const dname=useDeferredValue(name)
    
      const list=useMemo(() => {
        var l=[]
        for(var i=0;i<=20000;i++){
            l.push(<div key={i}>{dname}</div>)
        }
        return l
       
      }
      , [dname])
        
      
      
    
    
        
        
  return list
}

export default Defferedvalue