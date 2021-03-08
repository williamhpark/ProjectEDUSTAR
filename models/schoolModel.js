const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: false },
  location: { type: String, required: false },
  admissions: { type: String, required: false },
  image: { type: String, required: true },
});

const School = mongoose.model("schools", schoolSchema);

module.exports = School;
