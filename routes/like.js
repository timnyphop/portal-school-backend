const { likeSchool } = require("../middllewares/likes");
const { verifyToken } = require("../middllewares/auth");
const likeRouter = require("express").Router();
likeRouter.post("/like/:schoolId", verifyToken, likeSchool);
module.exports = likeRouter;
