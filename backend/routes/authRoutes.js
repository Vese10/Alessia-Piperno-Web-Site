// routes/authRoutes.js
const express = require('express');
const { login, changePassword } = require('../controllers/authController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/login', login);
router.put('/change-password', auth, changePassword);

module.exports = router;