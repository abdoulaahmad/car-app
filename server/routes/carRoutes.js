const express = require('express');
const router = express.Router();
const {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
} = require('../controllers/carController');

// Middleware to protect routes
const authenticateToken = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

// Get all cars
router.get('/', getCars);

// Get a single car by ID
router.get('/:id', getCarById);

// Create a new car (protected route) with image upload
router.post('/', authenticateToken, upload.single('image'), createCar);

// Update a car (protected route) with optional image upload
router.put('/:id', authenticateToken, upload.single('image'), updateCar);

// Delete a car (protected route)
router.delete('/:id', authenticateToken, deleteCar);

module.exports = router;