const apiRouter = require("express").Router();
const SchoolRouter = require("./school");
const userRouter = require("./user");
apiRouter.use("/api", SchoolRouter);
apiRouter.use("/api", userRouter);
module.exports = apiRouter;
