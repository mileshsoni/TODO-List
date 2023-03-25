// setting up mongo db using mongoose library

// step-1: requiring the library
const mongoose = require("mongoose");
// step-2: connecting the mongodb 
mongoose.connect("mongodb://0.0.0.0/todo_list_db");
// step-3: establishing a connection
const db = mongoose.connection;
// in case of error print this
db.on("error", console.error.bind(console, "error connecting to db"));
// in case there is no error print this
db.once("open", function(){
    console.log("connected to db");
});