// using express framework
const express = require ("express");
// to use path.join
const path = require("path");
// port on which our server will run
const port = 9000;
// starting express
const app = express();
// requiring the database
const db = require("./config/mongoose");
// requiring the task list containing tasks
const TaskList = require("./models/task");

//parser should be on top
app.use(express.urlencoded());

// to use ejs as our template engine
app.set("view engine", "ejs");

//app.use("/", require("./routes"));


//to specify the path of views of ejs
//since we are using path function in it 
//we need to include path module
// __dirname gives the path of current directory
app.set("views", path.join(__dirname, "views"));


//since we need to use css and js files in ejs
//we we let the express know in which folder we have
//css and js files
app.use(express.static("assets"));


// to include the route files
// all the urls should require the routes
app.use("/", require("./routes"));

app.listen (port, function(error){
    if(error){
        console.log("an error occurred");
        return ;
    }
    console.log(`server is running on port : ${port}`);
});