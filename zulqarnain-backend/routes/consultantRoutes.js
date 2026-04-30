const express = require("express");
const router = express.Router();
const Consultant = require("../models/Consultant");
const multer = require("multer");
const fs = require("fs");

/* CREATE UPLOADS FOLDER */
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

/* MULTER CONFIG */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

/* ROUTE */
router.post("/apply", upload.fields([
  { name: "certificates", maxCount: 5 },
  { name: "cv", maxCount: 2 }
]), async (req, res) => {

  try {

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const { name, email, phone, experience, description } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    /* UNIQUE EMAIL CHECK */
    const existing = await Consultant.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const consultant = new Consultant({
      name,
      email,
      phone,
      experience,
      description,
      certificates: req.files?.certificates?.map(f => f.filename) || [],
      cv: req.files?.cv?.map(f => f.filename) || []
    });

    await consultant.save();

    res.json({ message: "Application Submitted Successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

});
module.exports = router;