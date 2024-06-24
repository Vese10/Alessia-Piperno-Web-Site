const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const port = 3000;

// Middleware per parsing JSON
app.use(express.json());

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

// Rotta per creare un nuovo utente
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});