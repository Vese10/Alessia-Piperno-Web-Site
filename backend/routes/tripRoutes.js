// backend/routes/tripRoutes.js
const express = require('express');
const { addTrip, getTrips, joinTrip, deleteTrip, updateTrip } = require('../controllers/tripController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const router = express.Router();

router.post('/trips', auth, admin, addTrip); // Solo amministratori possono creare trip
router.get('/trips', getTrips); // Tutti gli utenti possono visualizzare i trip
router.post('/trips/:id/join', auth, joinTrip); // Utenti possono iscriversi ai trip
router.delete('/trips/:id', auth, admin, deleteTrip); // Solo gli admin possono eliminare i viaggi
router.put('/trips/:id', auth, admin, updateTrip); // Aggiungi la rotta PUT per aggiornare i viaggi

module.exports = router;