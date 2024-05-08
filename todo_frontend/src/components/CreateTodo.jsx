import { useState } from 'react';

export default function CreateTodo({todos,setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function createTodo() {
        try {
            await fetch("http://localhost:3000/createTodo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            });
            setTodos([...todos,{
                title,
                description
            }]);
        } catch (error) {
            console.log("Error " + error.message);
        }
    }

    return (
        <div className="container-fluid mt-4 mb-4 d-flex justify-content-center">
            <form className="form-inline">
                <label className="m-2 font-weight-bold">Title</label>
                <input type="text" className="form-control m-2" placeholder='Enter title here' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className="m-2 font-weight-bold">Description</label>
                <textarea type="text" className="form-control m-2" placeholder='Enter description here' value={description} onChange={(e) => setDescription(e.target.value)} style={{ resize: 'both' }}/>
                <button className="btn btn-primary m-2" onClick={createTodo}>Create Todo</button>
            </form>
        </div>
        );
}