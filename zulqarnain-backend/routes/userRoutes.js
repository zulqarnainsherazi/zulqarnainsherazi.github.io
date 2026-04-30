const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, accountType } = req.body;

    if (!name || !email || !password || !phone || !accountType) {
      return res.status(400).send("All fields required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password:hashedPassword,
      phone,
      accountType
    });

    await user.save();

    res.send("User Registered Successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

/* ================= LOGIN ================= */
const jwt = require("jsonwebtoken");

// LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN REQUEST:", email);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= SEND OTP ================= */
router.post("/send-otp", async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpire = Date.now() + 300000;

    await user.save();

    console.log("OTP:", otp);

    // ✅ CREATE transporter FIRST
   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

    // ✅ THEN send email
    await transporter.sendMail({
      from: "process.env.EMAIL_USER",
      to: req.body.email,   // ✅ send to user email
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`
    });

    res.send("OTP sent successfully");

  } catch (err) {
    console.log("OTP ERROR:", err);
    res.status(500).send("OTP sending failed");
  }
});
/* ================= VERIFY OTP ================= */
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).send("User not found");

    if (user.otp !== otp) return res.status(400).send("Invalid OTP");

    if (user.otpExpire < Date.now()) return res.status(400).send("OTP expired");

    const hashed = await bcrypt.hash(password, 10);

    user.password = hashed;
    user.otp = null;
    user.otpExpire = null;

    await user.save();

    res.send("Password reset successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});
module.exports = router;