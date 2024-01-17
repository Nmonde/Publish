const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('User Home Page');
});

router.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

// Add more routes as needed

module.exports = router;
