const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  register,
  login,
  getProfile,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.get(
  "/profile",
  protect,
  getProfile
);

router.post("/register", register);

router.post("/login", login);

router.post(
  "/forgot-password",
  forgotPassword
);

router.post(
  "/reset-password",
  resetPassword
);
module.exports = router;