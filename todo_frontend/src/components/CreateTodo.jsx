import { useState } from 'react';

export default function CreateTodo({todos,setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function createTodo() {
        try {
            await fetch("https://todoserver-j3ts.onrender.com/createTodo", {
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
            <form className="form-group">
                <label className="m-2 font-weight-bold">Title</label>
                <input type="text" className="form-control m-2" placeholder='Enter title here' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className="m-2 font-weight-bold">Description</label>
                <textarea type="text" className="form-control m-2" placeholder='Enter description here' value={description} onChange={(e) => setDescription(e.target.value)} style={{ resize: 'both' }}/>
                <button className="btn btn-primary m-2 mt-4 btn-block font-weight-bold" onClick={createTodo}>Create Todo</button>
            </form>
        </div>
        );
}