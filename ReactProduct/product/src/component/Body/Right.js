import React,{useEffect,useState,useContext} from 'react'
import { Context } from './Body'

function Right({images}) {
    const timeOrRate = useContext(Context)
    const now=new Date()
    const initial=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    const [time, settime] = useState(initial)
    useEffect(() => {
        setInterval(() => {
            console.log('hi')
            const now=new Date()
            const final=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
            settime(final)
        }, 1000);

        
    },[])
    
    
  return (
    <div className='col-sm right'>
        <div className="card w-100" >
            <img className="card-img-top" src={images} alt="Card image"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center ">
                {timeOrRate==='Time'? <h1 className="card-text text-white">{time}</h1>:<>
                <embed src="https://i.gifer.com/origin/d9/d9bf08d0507da5c0a7d1cdd7273bf6b1_w200.webp"/>
				<h1 className=' text-white'>78</h1>
                </>}
            </div>
        </div>
    </div>
  )
}

export default Right