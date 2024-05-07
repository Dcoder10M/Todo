import React, { useState } from 'react';

export default function CreateTodo({setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function createTodo() {
        try {
            const response = await fetch("http://localhost:3000/createTodo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            });
            const updatedTodos=await fetch("http://localhost:3000/todos");
            const newTodoList=await updatedTodos.json();
            setTodos(newTodoList.todos);
        } catch (error) {
            console.log("Error " + error.message);
        }
    }

    return (
        <div>
            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={createTodo}>Create Todo</button>
        </div>
        );
}