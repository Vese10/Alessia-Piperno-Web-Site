// backend/routes/tripRoutes.js
const express = require('express');
const { addTrip, getTrips, joinTrip } = require('../controllers/tripController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const router = express.Router();

router.post('/trips', auth, admin, addTrip); // Solo amministratori possono creare trip
router.get('/trips', auth, getTrips); // Tutti gli utenti possono visualizzare i trip
router.post('/trips/:id/join', auth, joinTrip); // Utenti possono iscriversi ai trip

module.exports = router;