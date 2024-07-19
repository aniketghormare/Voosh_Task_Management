const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://aniket:ghormare@cluster0.qr4dpak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((res) => {
    console.log("Mongodb connected")
}).catch((err) => {
    console.log(err)
})


module.exports=connection