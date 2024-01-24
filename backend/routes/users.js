// Imports
const express = require('express');
const router = express.Router();
const User = require('../db/userModel');
const mongoose = require('mongoose');
// POST route to add/create a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({username, password});
    res.status(201).json(newUser);
    console.log(username, password)
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Function to fetch a user by username
const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    console.log('User found:', user);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Function to update user's password
const updateUserPassword = async (username, newPassword) => {
  try {
    const result = await User.updateOne({ username }, { $set: { password: newPassword } });
    console.log('User updated:', result);
    return result;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Function to delete user by username
const deleteUserByUsername = async (username) => {
  try {
    const result = await User.deleteOne({ username });
    console.log('User deleted successfully');
    return result;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Post username and password to MongoDB: PublishPWStorage
const userInputs = async (username, userpassword) => {
  try {
    const result = await User.insertMany({ username: username, password: userpassword });
    console.log('User credentials stored successfully');
    return result;
  } catch (error) {
    console.log('User input is not stored');
    throw error;
  }
};

// Save username and password to MongoDB: PublishPWStorage
const saveUser = async (username, userpassword) => {
  try {
    const newUser = new User({ username, password: userpassword });
    const result = await newUser.save();
    console.log('User credentials saved successfully');
    return result;
  } catch (error) {
    console.log('Warning, User input is not saved!');
    throw error;
  }
};

module.exports = router;