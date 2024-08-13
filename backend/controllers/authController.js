// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Tentativo di login per:', email); // Log email

    const user = await User.findOne({ email });
    if (!user) {
      console.log('Utente non trovato:', email); // Log utente non trovato
      return res.status(401).send({ message: 'Utente non presente oppure email o password errati' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password errata per:', email); // Log password errata
      return res.status(401).send({ message: 'Utente non presente oppure email o password errati' });
    }

    const token = jwt.sign({ _id: user._id.toString(), role: user.role }, process.env.JWT_SECRET);
    console.log('Token generato:', token); // Log token generato
    res.status(200).send({ token, role: user.role, message: 'Login effettuato con successo' }); // Invia anche il ruolo
  } catch (error) {
    console.error('Errore durante il login:', error); // Log errore
    res.status(500).send({ message: 'Errore del server' });
  }
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'Utente non trovato' });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Vecchia password errata' });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).send({ message: 'Password cambiata con successo' });
  } catch (error) {
    res.status(500).send({ message: 'Errore del server' });
  }
};

module.exports = {
  login,
  changePassword
};