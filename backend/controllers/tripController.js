// backend/controllers/tripController.js
const Trip = require('../models/Trip');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('image');

const addTrip = (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).send({ message: "Errore nel caricamento dell'immagine" });
    }

    try {
      const trip = new Trip({
        ...req.body,
        imageUrl: req.file ? req.file.path : null,
      });
      await trip.save();
      res.status(201).send(trip);
    } catch (error) {
      res.status(400).send({ message: "Errore nella creazione del viaggio" });
    }
  });
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find().populate('participants', 'name surname'); // Popola i partecipanti con nome e cognome
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

const deleteTrip = async (req, res) => {
  const tripId = req.params.id;

  try {
    const trip = await Trip.findByIdAndDelete(tripId);

    if (!trip) {
      return res.status(404).send({ message: 'Viaggio non trovato' });
    }

    res.status(200).send({ message: 'Viaggio eliminato con successo' });
  } catch (error) {
    console.error("Errore durante l'eliminazione del viaggio:", error);
    res.status(500).send({ message: 'Errore durante l\'eliminazione del viaggio' });
  }
};

module.exports = {
  addTrip,
  getTrips,
  joinTrip,
  deleteTrip,
};