import React from 'react'
import Buttons from '../Buttons'


function Buttonrow({item}) {

  return (
 <div className="row ">
    <Buttons item={item.a}/>
    <Buttons item={item.b}/>
    <Buttons item={item.c}/>
</div>
  )
}

export default Buttonrow