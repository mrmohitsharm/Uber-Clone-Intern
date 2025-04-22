const  dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/db');   
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes'); // Import user routes
const cookieParser = require('cookie-parser'); // Import cookie parser
connectDB(); // Connect to MongoDB
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes); // Use user routes

module.exports = app;