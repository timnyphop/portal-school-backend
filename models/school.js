const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
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
});
module.exports = mongoose.model("school", schoolSchema);
