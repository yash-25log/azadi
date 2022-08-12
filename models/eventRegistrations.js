const mongoose = require("mongoose");

const EventRegistrationsSchema = new mongoose.Schema({
  eventId: String,
  userId: String,
  eventName: String,
  userName: String,
  userEmail: String,
  UserContactNo: String,
  userCollege: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("eventRegistrations", EventRegistrationsSchema);
