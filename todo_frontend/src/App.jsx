import { useState } from 'react'
import DisplayTodos from './components/DisplayTodos'
import CreateTodo from './components/CreateTodo'
import './App.css'

function App() {

  return (
    <>
      <CreateTodo/>
      <DisplayTodos/>
    </>
  )
}

export default App
