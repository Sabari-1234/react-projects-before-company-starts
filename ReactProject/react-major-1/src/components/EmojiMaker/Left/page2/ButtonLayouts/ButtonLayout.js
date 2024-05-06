import React, { useContext } from 'react'
import { mouthEyeContext } from '../../../../../pages/EmojiMaker'

import Buttonrow from './Buttonrow'
import FrontBackButtons from './FrontBackButtons'


function ButtonLayout({item1,item2}) {
  const page = useContext(mouthEyeContext)
  
  return (
<div className=' row'>
    <FrontBackButtons style1={'fa-solid fa-chevron-left'}/>
    <div className="col">
        <Buttonrow item={item1}/>
        <Buttonrow item={item2}/>
            
    </div>
    {page.page===2?<FrontBackButtons style1={'fa-solid fa-chevron-right'}/>:<FrontBackButtons style1={''}/>}
    

</div>
  )
}

export default ButtonLayout