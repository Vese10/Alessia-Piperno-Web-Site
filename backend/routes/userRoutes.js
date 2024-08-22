// routes/userRoutes.js
const express = require("express");
const {
  createUser,
  updateUser,
  getUser,
  getUserTrips,
} = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/users", createUser);
router.put("/me", auth, updateUser);
router.get("/me", auth, getUser);
router.get("/user/trips", auth, getUserTrips);

module.exports = router;
