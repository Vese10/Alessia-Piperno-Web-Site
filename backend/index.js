const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});