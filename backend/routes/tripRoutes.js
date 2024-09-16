// backend/routes/tripRoutes.js
const express = require("express");
const {
  addTrip,
  getTrips,
  joinTrip,
  deleteTrip,
  updateTrip,
} = require("../controllers/tripController");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const router = express.Router();

router.post("/trips", auth, admin, addTrip);
router.get("/trips", getTrips);
router.post("/trips/:id/join", auth, joinTrip);
router.delete("/trips/:id", auth, admin, deleteTrip);
router.put("/trips/:id", auth, admin, updateTrip);

module.exports = router;
