import React,{useState,useEffect,useRef} from 'react'

function Ref() {
    const [count, setcount] = useState(0)
    const interval = useRef(null)
    useEffect(() => {
      interval.current=setInterval(() => {
        setcount(count+1)

      }, 1000);
    
      return () => {
        clearInterval(interval.current)
      }
    })
    

  return (
    <div>
        count:{count}
        <button onClick={()=>clearInterval(interval.current)}>stop</button>

    </div>
  )
}

export default Ref