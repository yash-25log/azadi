const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("events", EventsSchema);
