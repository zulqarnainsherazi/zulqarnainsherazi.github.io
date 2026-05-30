const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  altphone: { type: String }, 
  qualification: { type: String, required: true },
  city: { type: String, required: true },
  intro: { type: String },
  subject: { type: String, required: true },
  experience: { type: String, required: true },
  mode: { type: String, required: true },
  frontCnic: { type: String },
  backCnic: { type: String },
  cv: { type: String },
  qualificationProof: { type: String }
});

module.exports = mongoose.model("Tutor", tutorSchema);
