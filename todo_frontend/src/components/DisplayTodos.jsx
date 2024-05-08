
function DisplayTodos({todos}) {
  return (
    <div className="roww">
      {todos.map((todo)=>(
        <div key={todo._id} className="cardd borderr col-12 col-sm-6 col-md-4 col-lg-3">
  <div>
    <i className="pin"></i>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
  </div>
  <button className="btn btn-outline-secondary btn-lg btn-block">Mark as done</button>
</div>
      ))}
    </div>
  )
}

export default DisplayTodos
