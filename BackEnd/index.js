const express = require("express")
const connection = require("./db")
const TaskRouter = require("./router/Task.router")
require("dotenv").config()
const cors=require("cors")
const Userrouter = require("./router/User.router")

const app = express()
app.use(cors())
app.use(express.json())


app.use("/task", TaskRouter)
app.use("/user", Userrouter)
let PORT =process.env.PORT || 8000

app.listen(PORT, () => {
    try {
        connection
        console.log(`Server is running at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})