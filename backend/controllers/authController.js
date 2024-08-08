// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
      res.status(200).send({ token, message: 'Login effettuato con successo' });
    } else {
      res.status(401).send({ message: 'Utente non presente oppure email o password errati' });
    }
  } catch (error) {
    res.status(500).send(error);
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

    res.status(200).send({ message: '' });
  } catch (error) {
    res.status(500).send({ message: 'Errore del server' });
  }
};

module.exports = {
  login,
  changePassword
};