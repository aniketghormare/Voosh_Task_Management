const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["TODO", "IN PROGRESS", "DONE"],
        required: true,
        default: "TODO"
    }
}, {
    versionKey: false
})

const TaskModel = mongoose.model("task", TaskSchema)


module.exports = TaskModel