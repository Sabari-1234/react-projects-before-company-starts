import React,{useState} from 'react'
import Left from './Left'
import Right from './rightside/Right'


function VideoPlayer() {
  const [url, seturl] = useState('https://assets.mixkit.co/videos/preview/mixkit-homeless-kittens-eating-on-the-street-31936-large.mp4')
  const [head, sethead] = useState('Croissants|flour and stone')
  const [content, setcontent] = useState('Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism\'s cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.')
 
  return (
   <div className='container bg-light p-3 mb-5 rounded'>
    <div className=' row rounded '>
       <Left url={url} head={head} content={content} />
       
       <Right seturl={seturl} sethead={sethead} setcontent={setcontent} />
       

       
      
        
    </div>
   </div>

   
    
  )
}

export default VideoPlayer