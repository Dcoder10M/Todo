import { useState } from "react";

function DisplayTodos({ todos,setTodos }) {
  async function strikeOut(id){
    await fetch('https://todoserver-j3ts.onrender.com/updateTodo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    });
    const response = await fetch('https://todoserver-j3ts.onrender.com/todos');
    const updatedTodos=await response.json();
    setTodos(updatedTodos.todos);
  }
  return (
    <div className="roww">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="cardd col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <div>
            <i className="pin"></i>
            {!todo.completed?<h2>{todo.title}</h2>:<h2 className="strikeOut">{todo.title}</h2>}
            {!todo.completed?<p>{todo.description}</p>:<p className="strikeOut">{todo.description}</p>}
          </div>
          {!todo.completed?
            <button
              className="btn btn-outline-secondary btn-lg btn-block"
              onClick={()=>(strikeOut(todo._id))}
            >
              Mark as done
            </button>
          :
          
          <button
            className="btn btn-success btn-lg btn-block"
            onClick={()=>(strikeOut(todo._id))}
          >
            Mark as Undone
          </button>
          }
        </div>
      ))}
    </div>
  );
}

export default DisplayTodos;
