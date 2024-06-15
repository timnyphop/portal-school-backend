const { findAllUsers } = require("../middllewares/user");
const { sendAllUsers } = require("../controllers/users");
const userRouter = require("express").Router();
userRouter.get("/users", findAllUsers, sendAllUsers);
module.exports = userRouter;
