

import React,{useReducer} from 'react';
import './App.css';
import {Greet} from './component/greet';
import Welcome from './component/welcome';
import Hello from './component/hello';
import Message from './component/message';
import Count from './component/count';
import Click from './component/funClick';
import Clickbutton from './component/classClick';
import Classcomp from './component/classcomp';
import ConditionalRendering from './component/ConditionalRendering';
import NameList from './component/NameList';
import Style from './component/style';
import  Sty from './component/style.module.css';
import './component/warn.css'
import Form from './component/Form';
import CompA from './component/CompA';
import Compine from './component/Compine';
import Refs from './component/Refs';
import Parent from './component/Parent'
import FRparent from './component/FRparent';
import Portal from './component/Portal';
import Erroreg from './component/Erroreg';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCount from './component/ClickCount';
import HoverCount from './component/HoverCount';
import But from './component/But';
import Hov from './component/Hov';
import But1 from './component/But1';
import Hov1 from './component/Hov1';
import Rendered from './component/Rendered';
import CompC from './component/CompC';
import { UserProvider } from './component/Context';
import AxiosGet from './component/AxiosGet';
import AxiosPost from './component/AxiosPost';
import HookCount from './component/HookCount';
import Hook2 from './component/Hook2';
import Hooks3 from './component/Hooks3';
import ArrayHook from './component/ArrayHook';
import EffectHook from './component/EffectHook';
import Hookmouse from './component/Hookmouse';
import HookUnmount from './component/HookUnmount';
import HooksCareless from './component/HooksCareless';
import GetData from './component/GetData';
import CompoA from './component/CompoA';
import Reducer from './component/Reducer';
import Counter2 from './component/Counter2';
import Counter3 from './component/Counter3';
import Compo1 from './component/Compo1';
import Compo2 from './component/Compo2';
import Compo3 from './component/Compo3';
import DataFetchState from './component/DataFetchState';
import DataFetchReducer from './component/DataFetchReducer';
import Parent1 from './component/Parent1';
import UseMemo from './component/UseMemo';
import Input from './component/Input';
import Ref from './component/Ref';
import DocTitle1 from './component/DocTitle1';
import DocTitle2 from './component/DocTitle2';
import Cus1 from './component/Cus1';
import Cus2 from './component/Cus2';
import Form1 from './component/Form1';
import { StateRender } from './component/StateRender';
import ReducerRender from './component/ReducerRender';

export const UserContext=React.createContext() 
export const UserChannel=React.createContext()
const initialValue=0
const reducer=(count,action)=>{
    switch (action) {
      case 'increment':
        return count+1
        
      case 'decreament':
        return count-1
        
      case 'reset':
        return initialValue
        
    
      default:
       return count
    }
}
export const Reduce =React.createContext()


function App(){
      const [count, dispatch] = useReducer(reducer,initialValue)
  
 
     return (
    <div className="App">
      {/*count: {count}
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decreament')}>decreament</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
      <Reduce.Provider value={{count:count,dispatch:dispatch}}>
      <Compo1/>
      <Compo2/>
      <Compo3/>
     </Reduce.Provider>*/}
      
      
     
     {/*<h1 className={Sty.success}>hello</h1>
     <h1 className='warn'>hello</h1>*/}
        
        {/*<Greet />
        <Welcome/>*/}
        {/*<Hello name='sabari' age={20} ><p>this is children</p></Hello>
        <Hello name='sabari' age={20} ><button>child button</button></Hello>
        <Hello name='pappu' age={17} />

      <Welcome name='kumar' age={20}/>*/}
      {/*<Message></Message>*/}
      {/*<Count/>*/}
      {/*<Hello name='pappu' age={17} />
      <Welcome name='kumar' age={20}/>
      <Message></Message>
    <Count/>*/}
    {/*<Click/>
    <Clickbutton/>*/}
    {/*<Classcomp/>*/}
    {/*<ConditionalRendering/>*/}
    {/*<NameList/>*/}
    {/*<Style heading={true}/>*/}
    {/*<Form/>
    <CompA/>*/}
    {/*<Compine/>*/}
    {/*<Refs/>*/}
     {/*<Parent/>*/}
    {/*} <FRparent/>*/}
    {/*<Portal/>*/}
   {/*} <ErrorBoundary>
    <Erroreg hero={'sabari'}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Erroreg hero={'joker'}/>
  </ErrorBoundary>*/}
 {/*} <ClickCount/>
  <HoverCount/>*/}
  {/*<But name='sabari'/>
  <Hov/>*/}
  
  
  {/*<Rendered render={(counter,count)=><But1 counter={counter} count={count}/>}/>
  <Rendered render={(counter,count)=><Hov1 counter={counter} count={count}/>}/>*/}
 
 {/*<UserProvider value={'sabari'}>
 <CompC/>
</UserProvider>*/}

{/*<AxiosPost/>
<AxiosGet/>*/}
  
  
    {/*<HookCount/>*/}
   {/*} <Hook2/>*/}
   {/*<Hooks3/>*/}
   {/*<ArrayHook/>*/}
   {/*<EffectHook/>*/}
  {/* <Hookmouse/>*/}
  {/*<HookUnmount/>*/}
  {/*<HooksCareless/>*/}
    
{/*<GetData/>*/}
{/*<UserContext.Provider value='sabari'>
  <UserChannel.Provider value={'kumar'}>
  <CompoA/>
  </UserChannel.Provider>

</UserContext.Provider>*/}
{/*<Reducer/>*/}
{/*<Counter2/>*/}
{/*<Counter3/>*/}
{/*<DataFetchState/>*/}
{/*<DataFetchReducer/>*/}
{/*<Parent1/>*/}
{/*<UseMemo/>*/}
{/*<Input/>*/}
{/*<Ref/>*/}
{/*<DocTitle1/>
<DocTitle2/>*/}
{/*<Cus1/>
<Cus2/>*/}
{/*<Form1/>*/}
{/* <StateRender/> */}
<ReducerRender/>




        
    </div>

  );
}
  


export default App;
