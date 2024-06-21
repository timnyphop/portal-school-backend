const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res, next) => {
  console.log("/post/registration");
  const { name, email, password, age } = req.body;
  if (!name || !email || !password || !age) {
    return res.status(500).json({ message: "Something went wrong" });
  }
  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new user({
      name,
      email,
      password: hashPassword,
      age,
    });
    await newUser.save();
    req.user = newUser;
    next();
  } catch (e) {
    console.log(e);
  }
};
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("/GET/Login");
  try {
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Email or password not correct" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Email or password not correct" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "пусто",
      { expiresIn: "1h" }
    );
    req.token = token;
    req.user = existingUser;

    next();
  } catch (e) {
    console.log(e);
  }
};
module.exports = { registerUser, loginUser };
