const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Dummy login function
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // For this app, we're using dummy credentials
    // In a real app, you would check against a database
    if (username === 'admin' && password === 'admin') {
      // Create a JWT token
      const token = jwt.sign(
        { username: 'admin' },
        process.env.JWT_SECRET || 'car-app-secret-key',
        { expiresIn: '1h' }
      );
      
      return res.status(200).json({
        message: 'Login successful',
        token,
        user: { username: 'admin' }
      });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Dummy register function (not used in this app but included for completeness)
const register = async (req, res) => {
  try {
    // This is just a placeholder as we're using dummy auth
    res.status(200).json({ message: 'Registration endpoint' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  register
};