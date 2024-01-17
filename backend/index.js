const express = require('express');
const { connectToDatabase } = require('./db/conn');
const usersRoute = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectToDatabase();

// Use your routes
app.use('/users', usersRoute);

// Additional middleware and routes can be added here

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port Andre:${port}`);
});