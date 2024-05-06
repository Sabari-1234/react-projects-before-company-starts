import React from 'react'



function SubRows({img,caption,seturl,sethead,setcontent,url,head,content}) {
 
  const changes=()=>{
    
    sethead(head)
    setcontent(content)
   seturl(url)
  }
  return (
<div className='row mb-3'>
    <div className='col'>
    <div className="card" onClick={changes}>
      <img className="card-img-top w-100 rightCards" src={img} alt="Card" />
      <div className="card-body">
       <h4 className="card-title">{caption}</h4>
     
      </div>
    </div>
    </div>

</div>
  )
}

export default SubRows