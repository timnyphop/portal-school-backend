const { sendAllSchools } = require("../controllers/school");
const findAllSchools = require("../middllewares/school");
const SchoolRouter = require("express").Router();
SchoolRouter.get("/school", findAllSchools, sendAllSchools);
module.exports = SchoolRouter;
