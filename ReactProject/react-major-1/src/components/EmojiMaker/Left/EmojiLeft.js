import React from 'react'
import Page1 from './page1/Page1'
import Page2 from './page2/Page2'



function EmojiLeft({page}) {
  const eye1={a:'~~',b:'^^',c:'><'}
  const eye2={a:"' '",b:'- -',c:'$$'}
  const mouth1={a:'>',b:'<',c:'-'}
  const mouth2={a:"~",b:'***',c:'###'}
  return (
    <div className='emojiLeft container'>
      {page===1?<Page1/>:page===2?<Page2 item1={eye1} item2={eye2} heading={'Select Eyes'}/>:  <Page2 item1={mouth1} item2={mouth2} heading={'Select Mouth'}/>}
      
      
         {/* <Page2 item1={eye1} item2={eye2} heading={'Select Eyes'}/>
         <Page2 item1={mouth1} item2={mouth2} heading={'Select Mouth'}/> */}

      
      

    </div>
  )
}

export default EmojiLeft