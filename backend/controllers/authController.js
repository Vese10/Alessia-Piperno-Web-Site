// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Tentativo di login per:', email); // Aggiungi log qui
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Utente non trovato:', email); // Aggiungi log qui
      return res.status(401).send({ message: 'Utente non presente oppure email o password errati' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password errata per:', email); // Aggiungi log qui
      return res.status(401).send({ message: 'Utente non presente oppure email o password errati' });
    }

    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    res.status(200).send({ token, message: 'Login effettuato con successo' });
  } catch (error) {
    console.error('Errore durante il login:', error); // Aggiungi log qui
    res.status(500).send({ message: 'Errore del server' });
  }
};

module.exports = {
  login,
  changePassword
};