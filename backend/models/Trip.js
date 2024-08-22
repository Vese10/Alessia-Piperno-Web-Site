// backend/models/Trip.js
const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  nation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxParticipants: {
    type: Number,
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  image: {
    type: String, // URL dell'immagine o path se viene caricata dal server
    required: false,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
