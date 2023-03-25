// we need TaskList to get the task and pass it to the home.ejs
const TaskList = require("../models/task");
// module.exports because we want to use the home function outside this file
module.exports.home = function(request, response){
    // asynchronous function
    async function getTask() {
        // function to find all the task in the TaskList
        return TaskList.find({});
    }
    // if no error
    getTask().then((task) => {
        return response.render("home", {
            title: "ToDo List",
            taskList: task
        });
    });
    // if error
    getTask().catch((error) => {
        console.log(error);
        return ;
    });
};