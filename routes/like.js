const { likeSchool, checkLike } = require("../middllewares/likes");
const { verifyToken } = require("../middllewares/auth");
const likeRouter = require("express").Router();
likeRouter.post("/like/:schoolId", verifyToken, likeSchool);
likeRouter.get("/like/:schoolId/check", verifyToken, checkLike);
module.exports = likeRouter;
