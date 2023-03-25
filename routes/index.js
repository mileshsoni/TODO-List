// requiring the express module
const { response } = require("express");
const express = require("express");
// using this function we can separate routes and controllers
const router = express.Router();

// getting the home controller
const homeController = require("../controller/home_controller");

// getting the task controller
const taskController = require("../controller/task_controller");

// in case of "/" home controller will be used
router.get("/", homeController.home);

// in case of "/create-list" or "/delete-list" task controller will be used
router.post("/create-list", taskController.task);
router.get("/delete-list", taskController.delete);

// exporting the router created
module.exports = router;