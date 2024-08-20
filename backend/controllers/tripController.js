// backend/controllers/tripController.js
const Trip = require('../models/Trip');

const addTrip = async (req, res) => {
  try {
    console.log("File caricato:", req.file); // Verifica se il file è stato caricato correttamente

    const imagePath = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    const trip = new Trip({
      nation: req.body.nation,
      description: req.body.description,
      date: req.body.date,
      duration: req.body.duration,
      price: req.body.price,
      maxParticipants: req.body.maxParticipants,
      image: imagePath,
    });

    await trip.save();
    res.status(201).send(trip);
  } catch (error) {
    console.error("Errore durante la creazione del viaggio:", error);
    res.status(500).json({ message: "Errore durante la creazione del viaggio", error: error.message });
  }
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