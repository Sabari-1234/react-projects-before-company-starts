import React from 'react'

function Erroreg({hero}) {
    if(hero==='joker'){
        throw new Error('not a hero');
    }
  return (
    <>
    <h1>hero:{hero}</h1>
    </>
  )
}

export default Erroreg