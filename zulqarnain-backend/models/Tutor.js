const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true}, // unique for testing
  phone: String,
  qualification: String,
  subject: String,
  experience: String,
  mode: String,
  city: String ,
  intro: String,
  cv: String
}, { timestamps: true });

module.exports = mongoose.model("Tutor", tutorSchema);