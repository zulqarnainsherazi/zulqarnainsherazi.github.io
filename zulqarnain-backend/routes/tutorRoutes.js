const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const multer = require("multer");

// STORAGE CONFIG
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ROUTE: Apply as Tutor
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

      // ✅ Validate required fields
      const { name, email, phone, qualification, city, intro, subject, experience, mode } = req.body;

      if (!name || !email || !phone || !qualification) {
        return res.status(400).json({
          message: "Missing required fields: name, email, phone, qualification"
        });
      }

      // ✅ Check for duplicate email
      const existingTutor = await Tutor.findOne({ email });
      if (existingTutor) {
        return res.status(400).json({
          message: "Email already exists (already applied as tutor)"
        });
      }

      // ✅ Safely handle files
      const files = req.files || {};
      const tutor = new Tutor({
        name,
        email,
        phone,
        qualification,
        city,
        intro,
        subject,
        experience,
        mode,
        frontCnic: files.frontCnic ? files.frontCnic[0].filename : null,
        backCnic: files.backCnic ? files.backCnic[0].filename : null,
        cv: files.cv ? files.cv[0].filename : null,
        qualificationProof: files.qualificationProof ? files.qualificationProof[0].filename : null
      });

      await tutor.save();
      console.log("Saved to DB ✔");

      return res.status(200).json({
        message: "Application Submitted Successfully",
        
      });
    } catch (error) {
      console.error("Tutor Apply Error:", error);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;
