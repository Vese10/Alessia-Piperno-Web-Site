// backend/middlewares/uploadMiddleware.js
const multer = require('multer');
const path = require('path');

// Configurazione di multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory dove salvare le immagini
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nome unico per evitare conflitti
  },
});

const upload = multer({ storage: storage });

module.exports = upload;