import React, { useRef } from 'react'

function Body({list,setlist,input,setinput,inputref}) {
  const listref = useRef([])
    
    const del=(id)=>{
      setlist(list.filter(todo=>todo.id!==id))
    }
    const change=(index)=>{
      const e1=listref.current.querySelectorAll('input')
      const elements=listref.current.querySelectorAll('li')
      if(e1[index].checked){
        
        elements[index].style.textDecoration='line-through'
        elements[index].classList.remove('text-danger')
        elements[index].classList.add('text-success')
        inputref.current.focus()
      }
      else{
        elements[index].style.textDecoration='none'
        elements[index].classList.remove('text-success')
        elements[index].classList.add('text-danger')
        inputref.current.focus()
       
      }
        
    }
    const edit=(Item,index)=>{
      
       
      setinput(list[index].item)
      list[index]={item:Item.item,id:Item.id,edit:false}
      inputref.current.focus()
      
       
    }
    const save=(Item,index)=>{
      if(/[a-z0-9]/ig.test(input)){
        list[index]={item:input,id:Item.id,edit:true}
       setinput('')
       setlist(list)
       inputref.current.focus()
      }
      else{
        
        inputref.current.focus()
      }
      
      
    }
    
    var arr=list.map((item,index)=><div className=' d-flex'><li  className=' fs-4 mt-3 d-flex justify-content-between w-100 text-danger' key={item.id} ><div className=' form-check-inline '><input type={'checkbox'} className=' form-check-input '  onChange={()=>change(index)}/></div>{item.item}<button className='btn btn-close btn-outline-warning me-3 mt-2' onClick={()=>del(item.id)}></button></li>{item.edit?<button className='btn btn-outline-secondary h-25 mt-3' onClick={()=>edit(item,index)}>edit</button>:<button className='btn btn-outline-success  h-25 mt-3 ' onClick={()=>save(item,index)} >save</button>}</div>)
    console.log(arr)
    
    
  return (
    <div>
        <ul className=' list-unstyled'ref={listref}>
            {
             arr
            }
        </ul>
    </div>
  )
}

export default Body