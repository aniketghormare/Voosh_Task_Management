const express=require("express")
const { addTask, getTasks, getTaskById, updateTask, deleteTask } = require("../controller/Task.controller")

const TaskRouter=express.Router()





TaskRouter.post("/addtask", addTask);


TaskRouter.get("/tasks", getTasks);


TaskRouter.get("/tasks/:id", getTaskById);


TaskRouter.put("/tasks/:id", updateTask);


TaskRouter.delete("/tasks/:id", deleteTask);




module.exports=TaskRouter