// index.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./models/auth'); // Importa il middleware di autenticazione
const app = express();
const port = 3000;

// Middleware per parsing JSON
app.use(express.json());

// Abilita CORS per tutte le rotte
app.use(cors());

// Connessione a MongoDB
mongoose.connect('mongodb://localhost:27017/AlessiaPipernoDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Errore di connessione al database:'));
db.once('open', () => {
  console.log('Connesso a MongoDB');
});

// Servire file statici
app.use(express.static(path.join(__dirname, '../../Alessia-Piperno-Web-Site')));

// Rotta per creare un nuovo utente
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) { // Codice errore per duplicazione chiave
      res.status(409).send({ message: 'Utente già registrato' }); // Codice 409 per conflitto
    } else {
      res.status(400).send(error);
    }
  }
});

// Rotta per ottenere tutti gli utenti
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rotta per aggiornare un utente esistente
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rotta per eliminare un utente esistente
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rotta per il login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ _id: user._id.toString() }, 'your_jwt_secret');
      res.status(200).send({ token, message: 'Login effettuato con successo' });
    } else {
      res.status(401).send({ message: 'Utente non presente oppure email o password errati' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rotta per il cambio password
app.put('/change-password', auth, async (req, res) => { // Usa il middleware auth
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
});

// Rotta per aggiornare le informazioni dell'utente loggato
app.put('/me', auth, async (req, res) => {
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
});

// Rotta per ottenere le informazioni dell'utente loggato
app.get('/me', auth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
