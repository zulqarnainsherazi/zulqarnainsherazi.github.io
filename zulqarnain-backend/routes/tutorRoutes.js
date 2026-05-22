const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const multer = require("multer");

// STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ROUTE
router.post(
  "/apply",
  upload.fields([
    { name: "frontCnic", maxCount: 1 },
    { name: "backCnic", maxCount: 1 },
    { name: "cv", maxCount: 1 },
    { name: "qualificationProof", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      console.log("BODY:", req.body);
      console.log("FILES:", req.files);

      const tutor = new Tutor({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        qualification: req.body.qualification,
        city: req.body.city,
        intro: req.body.intro,
        subject: req.body.subject,
        experience: req.body.experience,
        mode: req.body.mode,
       frontCnic: req.files?.frontCnic?.[0]?.filename || "",
backCnic: req.files?.backCnic?.[0]?.filename || "",
cv: req.files?.cv?.[0]?.filename || "",
qualificationProof: req.files?.qualificationProof?.[0]?.filename || ""

      });

      await tutor.save();
      console.log("Saved to DB ✔");

      return res.status(200).json({
        message: "Application Submitted Successfully"
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "Email already exists (already applied as tutor)"
        });
      }
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;
