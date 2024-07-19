const express = require("express")
const connection = require("./db")

const app = express()
app.use(express.json())
let PORT = 8000

app.listen(PORT, () => {
    try {
        connection
        console.log(`Server is running at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})