const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  experience: String,
  description: String,
  certificates: [String],
  cv: [String]
}, { timestamps: true });

module.exports = mongoose.model("Consultant", consultantSchema);