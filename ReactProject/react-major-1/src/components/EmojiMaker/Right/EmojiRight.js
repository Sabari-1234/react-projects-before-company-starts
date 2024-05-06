import React from 'react'

function EmojiRight({eyestyle,mouthstyle}) {
  return (
    <div className='emojiRight d-flex justify-content-center align-items-center'>
      <div className='rightCircle d-flex flex-column justify-content-around align-items-center'>
        <h1 className=' display-1 fw-bold'>{eyestyle}</h1>
        <h1 className=' display-1 fw-bold'>{mouthstyle}</h1>

      </div>
     </div>
  )
}

export default EmojiRight