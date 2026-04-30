const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  city: String,
  education: String,
  description: String,
  certificate: String
}, { timestamps: true });

module.exports = mongoose.model("Agent", agentSchema);