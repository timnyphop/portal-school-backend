const sendAllSchools = (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.schoolArray));
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  sendAllSchools,
};
