const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  classLevel: String,
  subject: String,
  mode: String,
  requirement: String
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);