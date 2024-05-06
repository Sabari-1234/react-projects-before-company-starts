
import './css/App.scss'
import Body from './components/Body';
import Input from './components/Input';
import { useState,useRef } from 'react';

function App() {
  const [list, setlist] = useState([])
  const [input, setinput] = useState('')
  const inputref = useRef(null)
  
  return (
    <div className=" text-center container">
      <Input setlist={setlist} list={list} input={input} setinput={setinput} inputref={inputref}/>
      <Body list={list} setlist={setlist} input={input} setinput={setinput} inputref={inputref}/>
    </div>
  );
}

export default App;
