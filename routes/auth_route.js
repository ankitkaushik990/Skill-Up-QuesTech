const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  verifyToken,
  admin,
  verifyotp,
} = require("../controller/auth_controller");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(verifyToken, logout);
router.route("/admin").post(admin);
router.route("/verify").post(verifyotp);
module.exports = router;
