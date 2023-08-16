const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  profileUser,
  selectUserById,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", profileUser);
router.get("/:id", selectUserById);

module.exports = router;
