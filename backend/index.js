// ES5 Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users')
const dotenv = require('dotenv') 
const axios = require('axios');
const connectToDatabase  = require('./db/conn');

dotenv.config();

// Middleware
const app = express();

// CORS middleware as a dependency
app.use(cors({
  origin: process.env.VITE_MONGODB_CONNECTION_STRING || 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
app.use(express.json());

// Handles preflight request
app.options('/register', cors(mongoose));

// Routes
app.use('/users', userRoutes);

// Axios setup
const api = axios.create({
  baseURL: process.env.VITE_MONGODB_CONNECTION_STRING || 'http://localhost:3000',
});

const registerUser = async (username, password) => {
  try {
    const response = await api.post('/register', { username, password });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

//Connects to MongoDB
connectToDatabase();

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port Andre: ${port}`);
});
