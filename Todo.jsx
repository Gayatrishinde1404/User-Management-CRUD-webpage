import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Todo() {

  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState({
      id : "",
      data : "",
  });
  
      const handleChange = (e) => {
           setTodo({
             ...todo,
             id : uuidv4(),
             data : e.target.value,
           })  
           console.log("todo", todo);        
      }

      const addTodo = (e) => {
        setTodoList([
           ...todoList,
           todo
        ])
      
      }

      const handleDelete = (id) => {
        let filteredTodo = todoList.filter((todo) => {
                 return todo.id !== id
           })
             setTodoList(filteredTodo)
          
      }

      const editTodo = (id) => {
        const newInput = window.prompt(`entre the new todo ${id} :`);
      const updatedList = todoList.map((item) => {
            
          return item.id === id ? {...item, data : newInput} : {...item}
        })
        
        setTodoList(updatedList)
      }

  return (
    
      <>
      <div className='w-[30vw] m-auto'>
      <input className="text-grey-500 rounded-md shadow-md mt-4 p-2 m-auto outline-none" type="text" placeholder='Entre text here'
      onChange={handleChange}/>
      <button className='w-35vw bg-black text-white rounded-md shadow-md ml-4 p-2' onClick={addTodo}>Add Todo</button>
      </div>

     <div>
        {
          todoList.map((todo,i) => {
               return (
                <div key={i} className='border w-[40vw] mx-auto p-2 my-3 rounded-md shadow-md flex justify-center item-center gap-4'>
                  <h3>{i + 1} &#10089;</h3>
                  <h3>{todo.data}</h3>
                  <button className='w-35vw bg-yellow-600 text-white rounded-md shadow-md ml-4 p-2' onClick={() => editTodo(todo.id)}>Edit</button>
                  <button className='w-35vw bg-red-900 text-white rounded-md shadow-md ml-4 p-2' onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
               )
          })
        }
     </div>

      </>     
  )
}

export default Todo;