const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNo: Number,
  college: String,
  year: Number,
});

module.exports = mongoose.model("Users", UserSchema);
