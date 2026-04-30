const express = require("express");
const router = express.Router();
const Enrollment = require("../models/Enrollment");

router.post("/", async (req, res) => {
  try {

    console.log("ENROLL DATA:", req.body);

    const { name, email, phone, course, message } = req.body;

    if (!name || !email || !phone || !course) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await Enrollment.findOne({ email });

if(existing){
  return res.status(400).json({ message: "Email already exists" });
}

const enroll = new Enrollment({
  name,
  email,
  phone,
  course,
  message
});

await enroll.save();

    res.json({ message: "Enrollment Successful" });

  } catch (error) {

  if(error.code === 11000){
    return res.status(400).json({ message: "Email already registered" });
  }

  res.status(500).json({ message: "Server error" });
}
});

module.exports = router;