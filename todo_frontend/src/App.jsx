import { useEffect, useState } from 'react'
import DisplayTodos from './components/DisplayTodos'
import CreateTodo from './components/CreateTodo'
import './App.css'

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    fetch("https://todoserver-j3ts.onrender.com/todos").then(async(response)=>{
      const todoArray=await response.json();
      setTodos(todoArray.todos);
    })
  },[])
  return (
    <div className="container">
      <CreateTodo todos={todos} setTodos={setTodos}/>
      <DisplayTodos todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
