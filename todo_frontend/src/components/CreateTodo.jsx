import { useState } from 'react';
import axios from 'axios';

export default function CreateTodo({todos,setTodos}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function createTodo() {
        try {
            const response=await axios.post("http://localhost:3000/createTodo", {
                title: title,
                description: description
            });
            const msg=await response.json();
            console.log(msg);
            setTodos([...todos,{
                title,
                description,
                completed:false
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