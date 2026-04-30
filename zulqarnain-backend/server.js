const session = require("express-session");
const fs = require("fs");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());   // 🔥 VERY IMPORTANT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
const connectDB = require("./config/db");
connectDB(); 

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
const tutorRoutes = require("./routes/tutorRoutes");
app.use("/api/tutor", tutorRoutes);// ✅ MUST match frontend
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/student", studentRoutes);
const enrollRoutes = require("./routes/enrollRoutes");
app.use("/api/enroll", enrollRoutes);
const consultantRoutes = require("./routes/consultantRoutes");
app.use("/api/consultant", consultantRoutes);
const agentRoutes = require("./routes/agentRoutes");
app.use("/api/agent", agentRoutes);
// test route
app.get("/", (req, res) => {
  res.send("Server working");
});
process.on("uncaughtException", (err) => {
    console.error("❌ UNCAUGHT EXCEPTION:", err);
});
process.on("unhandledRejection", (err) => {
    console.error("❌ UNHANDLED REJECTION:", err);
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
