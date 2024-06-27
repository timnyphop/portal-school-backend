const mongoose = require("mongoose");
const UserModel = require("./user");
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  raitingtop: {
    type: String,
    required: true,
  },
  raitingmedium: {
    type: String,
    required: true,
  },
  raitingbad: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likesBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  imageUrl: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("school", schoolSchema);
