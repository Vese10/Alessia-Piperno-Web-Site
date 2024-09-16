// index.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.use(express.json());

app.use(
  cors({
    origin: "https://alessia-piperno-web-site-1.onrender.com",
  })
);

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Database connection error:")
);
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.static(path.join(__dirname, "../../Alessia-Piperno-Web-Site")));

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");

app.use(authRoutes);
app.use(userRoutes);
app.use(tripRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
