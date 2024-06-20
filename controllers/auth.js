const completeRegistration = (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
};
const completeLogin = (req, res) => {
  res.status(200).json({ result: req.user, token: req.token });
};
module.exports = { completeRegistration, completeLogin };
