const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/car-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const carRoutes = require('./routes/carRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/cars', carRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Car Listing API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});