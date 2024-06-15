const { sendAllSchools } = require("../controllers/school");
const { findAllSchools } = require("../middllewares/school");
const SchoolRouter = require("express").Router();
SchoolRouter.get("/schools", findAllSchools, sendAllSchools);
module.exports = SchoolRouter;
