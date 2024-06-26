const school = require("../models/school");

const findAllSchools = async (req, res, next) => {
  try {
    req.schoolArray = await school.find({});
    next();
  } catch (e) {
    console.log(`При запросе всех школ возникла ошибка: ${e}`);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { findAllSchools };
