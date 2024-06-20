const { registerUser } = require("../middllewares/auth");
const { loginUser } = require("../middllewares/auth");
const { completeRegistration } = require("../controllers/auth");
const { completeLogin } = require("../controllers/auth");
const AuthRouter = require("express").Router();
AuthRouter.post("/register", registerUser, completeRegistration);
AuthRouter.post("/login", loginUser, completeLogin);
module.exports = AuthRouter;
