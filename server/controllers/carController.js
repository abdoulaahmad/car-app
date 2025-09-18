const Car = require('../models/Car');
const { uploadImage } = require('../utils/cloudinary');
const fs = require('fs');

// Get all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new car
const createCar = async (req, res) => {
  try {
    const { make, model, year, price } = req.body;
    
    let imageUrl = '';
    if (req.file) {
      // Upload image to Cloudinary
      imageUrl = await uploadImage(req.file.path);
    }

    const newCar = new Car({
      make,
      model,
      year,
      price,
      imageUrl
    });

    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a car
const updateCar = async (req, res) => {
  try {
    const { make, model, year, price } = req.body;
    
    let updateData = { make, model, year, price };
    
    if (req.file) {
      // Upload new image to Cloudinary
      const imageUrl = await uploadImage(req.file.path);
      updateData.imageUrl = imageUrl;
    }
    
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a car
const deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
};