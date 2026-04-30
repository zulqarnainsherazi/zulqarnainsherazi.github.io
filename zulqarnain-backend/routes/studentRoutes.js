const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// APPLY STUDENT REQUEST
router.post("/apply", async (req, res) => {
  try {

    console.log("DATA:", req.body);

    const student = new Student({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      classLevel: req.body.classLevel,
      subject: req.body.subject,
      mode: req.body.mode,
      requirement: req.body.requirement
    });

    await student.save();

    res.json({ message: "Request Submitted Successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;