const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes =
  require("./routes/attendanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes AFTER middleware
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use(
  "/api/attendance",
  attendanceRoutes
);

app.get("/", (req, res) => {
  res.send("ERP API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});