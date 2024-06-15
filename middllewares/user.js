const users = require("../models/user");
const findAllUsers = async (req, res, next) => {
  try {
    req.usersArray = await users.find({});
    next();
  } catch (e) {
    console.log(`при поиске всех пользователей возникла ошибка ${e} `);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = { findAllUsers };
