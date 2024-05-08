
function DisplayTodos({todos}) {
  return (
    <div className="roww">
      {todos.map((todo)=>(
        <div key={todo._id} className="cardd borderr col-12 col-sm-6 col-md-4 col-lg-3">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>Mark as done</button>
        </div>
      ))}
    </div>
  )
}

export default DisplayTodos
