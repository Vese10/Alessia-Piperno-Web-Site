// controllers/userController.js
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = new User({
      ...req.body,
      role: req.body.role || "user",
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({ message: "User already signed up" });
    } else {
      res.status(400).send(error);
    }
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "surname", "email", "phone"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ message: "Update not valid" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const Trip = require("../models/Trip");

const getUserTrips = async (req, res) => {
  try {
    const userTrips = await Trip.find({ participants: req.userId });
    res.status(200).send(userTrips);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving trips" });
  }
};

module.exports = {
  createUser,
  updateUser,
  getUser,
  getUserTrips,
};
