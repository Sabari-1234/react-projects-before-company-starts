import React,{useState} from 'react'
import Left from './Left'
import Right from './Right'
import image1 from '../../images/1.png'
export const Context=React.createContext()
export const UserContext=React.createContext()

function Body() {
  const [images, setimages] = useState(image1)
  const [timeOrRate, settimeOrRate] = useState('Time')
  return (
    <div className='container'>
      <div className="row">
        <Context.Provider value={timeOrRate}>
             <Right images={images}/>
        </Context.Provider>
        <UserContext.Provider value={settimeOrRate}>
                  <Context.Provider value={setimages}>
                      <Left/>
                  </Context.Provider>
        </UserContext.Provider>
        
        

      </div>
    </div>
  )
}

export default Body