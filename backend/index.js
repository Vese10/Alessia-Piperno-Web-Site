// index.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

// Carica variabili d'ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Log database URL
console.log('JWT_SECRET:', process.env.JWT_SECRET); // Log JWT secret

// Middleware per parsing JSON
app.use(express.json());

// Abilita CORS per tutte le rotte
app.use(cors());

// Connessione a MongoDB
mongoose.connect(process.env.DATABASE_URL, {
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

// Importa le rotte
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Usa le rotte
app.use(authRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});