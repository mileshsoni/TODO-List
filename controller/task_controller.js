// we need TaskList to append the data collected from the form
const TaskList = require("../models/task");

// controller to append the data collected
module.exports.task = function(request, response){
    TaskList.create({
        description: request.body.description,
        category: request.body.category,
        date: request.body.date
    });
    return response.redirect("back");
};
// controller for deleting task
module.exports.delete = function (req, res) {
    //getting the id of selected boxes
    let id = req.query;
    // extracting keys from req.query and creating a array out of it
    var list = Object.keys(id);
    // function to get length of array
    let size = list.length;
    // asynchronous function to delete task
    // async because we want to prevent error
    // error handling can be done using .catch 
    async function deleteTask (id) {
        // using the function to delete them by id
        return TaskList.findByIdAndDelete(id);
    }
    for(let i=0; i<size; i++){
        // if we aren't able to delete task
        // print error
        deleteTask(list[i]).catch(()=>{
            console.log(error);
            return ;
        });
    }
    return res.redirect("back");

};