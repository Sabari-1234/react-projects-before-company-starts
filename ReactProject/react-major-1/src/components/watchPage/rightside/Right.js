import React from 'react'
import SubRows from './SubRows'
import im1 from '../../../images/1.jpg'
import im2 from '../../../images/2.jpg'
import im3 from '../../../images/3.jpg'


function Right({seturl,sethead,setcontent}) {
  const arr=[
    {
      img:im1,
      caption:'Croissants|flour and stone',
      key:1,
      seturl,sethead,setcontent,
      url:'https://assets.mixkit.co/videos/preview/mixkit-homeless-kittens-eating-on-the-street-31936-large.mp4',
      head:'Croissants|flour and stone',
      content:'Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism\'s cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.'

    },
    {
      img:im2,
      caption:'Perfect Mashed Potatoes and Gravy ',
      key:2,
    
      seturl,sethead,setcontent,
      url:'https://assets.mixkit.co/videos/preview/mixkit-homeless-grey-kitten-eating-in-slow-motion-31977-large.mp4',
      head:'Perfect Mashed Potatoes and Gravy',
      content:'The food system has significant impacts on a wide range of other social and political issues including: sustainability, biological diversity, economics, population growth, water supply, and access to food. Food safety and food security are monitored by international agencies like the International Association for Food Protection, World Resources Institute, World Food Programme, Food and Agriculture Organization, and International Food Information Council.'
    },
    {
      img:im3,
      caption:'The Heart of Soba ',
      key:3,seturl,sethead,setcontent,
      url:'https://assets.mixkit.co/videos/preview/mixkit-faces-of-two-girls-on-a-friends-date-in-a-41233-large.mp4',
      head:'The Heart of Soba ',
      content:'Omnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. The majority of the food energy required is supplied by the industrial food industry, which produces food with intensive agriculture and distributes it through complex food processing and food distribution systems. This system of conventional agriculture relies heavily on fossil fuels, which means that the food and agricultural system is one of the major contributors to climate change, accountable for as much as 37% of total greenhouse gas emissions.'
    }
    
  ]
  return (
    <div className='col'>
     {
        arr.map(item=><SubRows {...item}/>)
     } 
       
       
        
    </div>
  )
}

export default Right