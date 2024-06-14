const School = require("../models/school");

const findAllSchools = async (req, res, next) => {
  try {
    req.schoolArray = await School.find({});
    next();
  } catch (e) {
    console.log(`При запросе всех школ возникла ошибка: ${e}`);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = findAllSchools;
