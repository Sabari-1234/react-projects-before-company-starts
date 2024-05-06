import React,{useState} from 'react'
import Defferedvalue from '../components/Defferedvalue'
//import Transition from '../components/Transition'
// import { Link } from 'react-router-dom'
// import UseIdHook from '../components/UseIdHook'
//import UseImperativeHandle from '../components/UseImperativeHandle'
// import useCustum from '../cosumHook/useCustum'

function Home() {
 //const ref1 = useRef(null)
//  const [count,setcount,name,setname]=useCustum(0,'sabari')
const [name, setname] = useState('')
const handle=(e)=>{
  setname(e.target.value)
  
 
}
  
  return (
    <div>home
        {/* <Link to={'/about'} >About</Link>
        <Link to={'/contact'} >Contact</Link> */}

        {/* <UseIdHook/>
        <UseIdHook/> */}
        {/* <UseImperativeHandle ref={ref1}/>
        <button onClick={ref1.current.hel} >hello{ref1.current.x}</button>  */}
        {/* <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/> */}
        {/* <Transition/> */}
        <input type="text" value={name} onChange={handle} />
        <Defferedvalue name={name}/>

    </div>
  )
}

export default Home