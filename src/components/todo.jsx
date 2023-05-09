import React, { useEffect } from 'react'
import "./todo.css"
import { useState } from 'react';

const getData = () =>{
  let list = localStorage.getItem('Data')
  
  if(list){
    return JSON.parse(localStorage.getItem('Data'))
  } else{
    return []
  }
}
const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getData());

  useEffect(()=>{
    localStorage.setItem('Data',JSON.stringify(items))
},[items])

  const addItem = () => {
   if (!inputData){

   } else{
     setItems([...items, inputData])
    setInputData('')
   }
   
  }

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, ind) => {
           return  ind != id;
           
    })
    setItems(updatedItems);
  }

  const removeAll = () => {
    setItems([]);
  }


  return (
    <div className='main'>
        <div className='child'>
       <center><figure><i className="fa fa-th-list fa-3x" aria-hidden="true" id='id'></i>
       <figcaption id='caption' className='caption'>Add Your Goals Here ✏️</figcaption>
       </figure>
       <div className='addItems'>
        <input className='field' type='text' placeholder='Add Items....'
             
             value={inputData}
             onChange={(e) => setInputData(e.target.value)}
        
        />
        <i className="fa fa-plus add-btn fa-2x icon" title='Add Item' id='add' onClick={addItem}></i>
       </div>
       <div className='showItems'>
   {
 
       items.map((elem, ind) => {
           return (
            <div className='eachItems' key={ind}>
            <h3 id='box'>{ elem }</h3>
            <div className='todo-btn'>
            <i class="fa fa-trash-o fa-lg" id='trash' title='Delete Item'  onClick={() => deleteItem(ind)}></i>
            </div>
          </div>
           )
       })

   }

       </div><button className='btnn' onClick={removeAll}>Remove All</button>
       </center> 
        </div>

    </div>
  )
}

export default Todo