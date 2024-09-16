// backend/controllers/tripController.js
const Trip = require("../models/Trip");

const addTrip = async (req, res) => {
  try {
    if (!req.body.image || !req.body.image.startsWith("http")) {
      return res
        .status(400)
        .json({ message: "A valid URL for the image is required" });
    }

    const trip = new Trip({
      nation: req.body.nation,
      description: req.body.description,
      date: req.body.date,
      duration: req.body.duration,
      price: req.body.price,
      maxParticipants: req.body.maxParticipants,
      image: req.body.image,
    });

    await trip.save();
    res.status(201).send(trip);
  } catch (error) {
    console.error("Error during trip creation::", error);
    res
      .status(500)
      .json({
        message: "Error during trip creation",
        error: error.message,
      });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find().populate("participants", "name surname");
    res.status(200).send(trips);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving trips" });
  }
};

const joinTrip = async (req, res) => {
  const userId = req.userId;
  const tripId = req.params.id;

  try {
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).send({ message: "Trip not found" });
    }

    if (trip.participants.includes(userId)) {
      return res
        .status(400)
        .send({ message: "You are already subscribed at this trip" });
    }

    if (trip.participants.length >= trip.maxParticipants) {
      return res.status(400).send({ message: "The trip is fully booked" });
    }

    trip.participants.push(userId);
    await trip.save();

    res.status(200).send({ message: "Successfully registered for the trip" });
  } catch (error) {
    res.status(500).send({ message: "Error during trip registration" });
  }
};

const deleteTrip = async (req, res) => {
  const tripId = req.params.id;

  try {
    const trip = await Trip.findByIdAndDelete(tripId);

    if (!trip) {
      return res.status(404).send({ message: "Trip not found" });
    }

    res.status(200).send({ message: "Trip deleted successfully" });
  } catch (error) {
    console.error("Error during trip deletion:", error);
    res
      .status(500)
      .send({ message: "Error during trip deletion" });
  }
};

const updateTrip = async (req, res) => {
  const tripId = req.params.id;

  try {
    const trip = await Trip.findByIdAndUpdate(tripId, req.body, { new: true });

    if (!trip) {
      return res.status(404).send({ message: "Trip not found" });
    }

    res.status(200).send(trip);
  } catch (error) {
    console.error("Error during trip update:", error);
    res
      .status(500)
      .send({ message: "Error during trip update" });
  }
};

module.exports = {
  addTrip,
  getTrips,
  joinTrip,
  deleteTrip,
  updateTrip,
};
