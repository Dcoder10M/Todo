import React, { useEffect, useState } from 'react'

function DisplayTodos() {
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/todos")
        .then(async function(response){
            const data=await response.json();
            setTodos(data.todos);
        })
    },[])
  return (
    <div>
      {todos.map((todo)=>(
        <div key={todo._id}>
            <h3>{todo.title}</h3>
            <h5>{todo.description}</h5>
            <button>Mark as done</button>
        </div>
      ))}
    </div>
  )
}

export default DisplayTodos
