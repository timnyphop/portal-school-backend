const apiRouter = require("express").Router();
const AuthRouter = require("./auth");
const SchoolRouter = require("./school");
const userRouter = require("./user");
apiRouter.use("/api", SchoolRouter);
apiRouter.use("/api", userRouter);
apiRouter.use("/api", AuthRouter);
module.exports = apiRouter;
