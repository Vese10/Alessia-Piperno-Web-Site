// backend/controllers/tripController.js
const Trip = require('../models/Trip');

const addTrip = async (req, res) => {
  console.log("Dati ricevuti dal frontend:", req.body);
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).send(trip);
  } catch (error) {
    console.error("Errore durante la creazione del viaggio:", error);
    res.status(400).send({ message: "Errore nella creazione del viaggio" });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).send(trips);
  } catch (error) {
    res.status(500).send({ message: 'Errore nel recupero dei viaggi' });
  }
};

const joinTrip = async (req, res) => {
  const userId = req.userId;
  const tripId = req.params.id;

  try {
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).send({ message: 'Viaggio non trovato' });
    }

    if (trip.participants.includes(userId)) {
      return res.status(400).send({ message: 'Sei già iscritto a questo viaggio' });
    }

    if (trip.participants.length >= trip.maxParticipants) {
      return res.status(400).send({ message: 'Il viaggio è al completo' });
    }

    trip.participants.push(userId);
    await trip.save();

    res.status(200).send({ message: 'Iscritto al viaggio con successo' });
  } catch (error) {
    res.status(500).send({ message: 'Errore durante l\'iscrizione al viaggio' });
  }
};

module.exports = {
  addTrip,
  getTrips,
  joinTrip
};