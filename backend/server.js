'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// MongoDB Connection
const mongoURI = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic Route Handlers
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Additional route handlers can be defined here

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
