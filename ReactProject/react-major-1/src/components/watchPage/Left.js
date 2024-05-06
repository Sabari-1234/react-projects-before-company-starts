import React from 'react'

function Left({url,head,content}) {

  return (
    <div className=' col-sm-8 border-end'>
           <video controls className='w-100 pb-3' src={url}/>
            <div className='border-bottom d-flex justify-content-between'>
              <p>98.4k VIEWS</p>
              <div><i className="fa-regular fa-heart me-3"></i><i className="fa-regular fa-message me-3"></i><i className="fa-regular fa-bookmark me-3"></i></div>
            </div>
            <div>
              <h1>{head}</h1>
						  <p>{content}</p>
            </div>

    </div>
  )
}

export default Left