const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const dbConfig = require('../config/db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
dbConfig();

// Routes
// app.use('/contacts', contactRoutes);


app.get('/todos', async (req, res) => {
    try {
        res.send('Hello World');
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});