const express = require("express");
const router = express.Router();
const Agent = require("../models/Agent");
const multer = require("multer");
const fs = require("fs");

/* CREATE UPLOADS FOLDER */
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

/* STORAGE */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

/* ROUTE */
router.post("/apply", upload.single("certificate"), async (req, res) => {

  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { name, email, phone, city, education, description } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    /* UNIQUE EMAIL */
    const existing = await Agent.findOne({ email });
    if(existing){
      return res.status(400).json({ message: "Email already exists" });
    }

    const agent = new Agent({
      name,
      email,
      phone,
      city,
      education,
      description,
      certificate: req.file ? req.file.filename : ""
    });

    await agent.save();

    res.json({ message: "Application submitted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }

});

module.exports = router;