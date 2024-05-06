import React from 'react'
import Images from './LeftComponents/Images'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import Button from './LeftComponents/Button'

function Left() {
  const arr=[img1,img2,img3,img4]
  const text=['Time','Heart Rate']
  return (
    <div className='col-sm left'>
      <h1 className=' mt-4 mb-4'>FitBit 19 - The Smartest Watch</h1>
      <p className=' mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellendus eligendi dolore quae provident quasi perspiciatis possimus dolorum quia magni! Aut labore necessitatibus ea earum placeat. Libero quia aliquid laborum!</p>
      <h4>Select Color</h4>
      
      {arr.map((item,index)=><Images img={item} key={index}/>)}
      
      <h4 className=' mt-3'>Features</h4>
      {
          text.map((item,index)=><Button text={item} key={index}/>)
      }
      <br/>
      <Button text='Buy Now' color={'btn-primary'}/>
      


    </div>
  )
}

export default Left