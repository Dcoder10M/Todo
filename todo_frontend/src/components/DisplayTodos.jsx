
function DisplayTodos({todos}) {
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
