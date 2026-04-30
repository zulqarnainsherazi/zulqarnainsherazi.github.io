const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  name: String,
  email: {
  type: String,
  required: true,
  unique: true   // ✅ THIS LINE IS IMPORTANT
},
  phone: String,
  course: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);