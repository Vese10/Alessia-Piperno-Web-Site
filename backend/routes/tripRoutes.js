// backend/routes/tripRoutes.js
const express = require('express');
const { addTrip, getTrips, joinTrip, deleteTrip } = require('../controllers/tripController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const upload = require('../middlewares/uploadMiddleware.js')

const router = express.Router();

router.post('/trips', auth, admin, upload.single('image'), addTrip); // Solo amministratori possono creare trip
router.get('/trips', getTrips); // Tutti gli utenti possono visualizzare i trip
router.post('/trips/:id/join', auth, joinTrip); // Utenti possono iscriversi ai trip
router.delete('/trips/:id', auth, admin, deleteTrip); // Solo gli admin possono eliminare i viaggi

module.exports = router;