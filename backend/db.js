const mongoose = require('mongoose');

try{
    mongoose.connect("mongodb+srv://divyanshu10m:divyanshu.10m@democluster.tdbizmk.mongodb.net/todos");
    console.log("Connected to DB");
}catch(error){
    console.log("Error connecting to DB "+error.message);
}

const TodoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo= mongoose.model("todo",TodoSchema);

module.exports = Todo;