const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// Login route
router.post('/login', login);

// Register route (not used in this app but included for completeness)
router.post('/register', register);

module.exports = router;