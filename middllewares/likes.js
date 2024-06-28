const School = require("../models/school");

const likeSchool = async (req, res, next) => {
  const { schoolId } = req.params;
  const userId = req.user.id;
  console.log("тест запрос на лайк");
  try {
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }

    // Проверка, лайкнул ли пользователь эту школу ранее
    if (school.likesBy.includes(userId)) {
      return res
        .status(400)
        .json({ message: "User has already liked this school" });
    }

    school.likesBy.push(userId);
    school.likes = (parseInt(school.likes) + 1).toString();

    await school.save();

    res.status(200).json({ message: "School liked successfully" });
    next();
  } catch (e) {
    console.log(`Error while liking school: ${e}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkLike = async (req, res) => {
  const { schoolId } = req.params;
  const userId = req.user.id;

  try {
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }

    const hasLiked = school.likesBy.includes(userId);
    res.status(200).json({ liked: hasLiked });
  } catch (e) {
    console.log(`Error while checking like: ${e}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { likeSchool, checkLike };
