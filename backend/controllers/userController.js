// controllers/userController.js
const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const user = new User({
      ...req.body,
      role: req.body.role || 'user', // Imposta il ruolo come 'user' se non specificato
    });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) { // Codice errore per duplicazione chiave
      res.status(409).send({ message: 'Utente già registrato' }); // Codice 409 per conflitto
    } else {
      res.status(400).send(error);
    }
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'surname', 'email', 'phone'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ message: 'Aggiornamento non valido' });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  updateUser,
  getUser
};