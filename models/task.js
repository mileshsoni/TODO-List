// requiring the mongoose library
const mongoose = require("mongoose");
// creating a schema
const taskSchema = new mongoose.Schema ({
    description : {
        type: String,
        required: true
    },
    category : {
        type: String,
    },
    date : {
        type: String,
        required: true
    }
});
// name in the db
const TaskList = mongoose.model("TaskList", taskSchema);
// exporting the TaskList
module.exports = TaskList;
