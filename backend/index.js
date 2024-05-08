/* eslint-disable */
const express=require('express');
const { todoSchema, updateTodoSchema } = require('./inputValidation');
const Todo = require('./db');
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

app.get("/todos",async function(req,res){
    try{
        const todos=await Todo.find({});
        res.json({
            todos
        });
    }
    catch(error){
        console.log("DB error while fetching todos "+error.message);
    }
});

app.post("/createTodo",async function(req,res){
    const check=todoSchema.safeParse(req.body);
    if(!check.success){
        res.status(400).json({
            message:"Incorrect inputs"
        });
    }
    try{
        await Todo.create({
            title:req.body.title,
            description:req.body.description,
            completed:false
        })
        res.status(200).json({
            msg:"Todo created successfully"
        })
    }
    catch(error){
        console.log("DB error while creating todo "+error.message);
    }
})

app.put("/updateTodo",async function(req,res){
    const check=updateTodoSchema.safeParse(req.body);
    if(!check.success){
        res.status(400).json({
            message:"Incorrect inputs"
        });
    }
    try{
        const todoToBeUpdated=await Todo.findById(req.body.id);
        console.log(todoToBeUpdated);
        todoToBeUpdated.completed=!todoToBeUpdated.completed;
        await todoToBeUpdated.save();
        return res.status(200).json({
            message: "Todo item updated successfully"
        });
    }catch(error){
        console.log("DB error while updating todo "+error.message);
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})