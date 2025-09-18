const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const uploadImage = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'car_app',
      use_filename: true,
      unique_filename: false
    });
    // Delete the temporary file after upload
    fs.unlinkSync(imagePath);
    return result.secure_url;
  } catch (error) {
    // Delete the temporary file even if upload fails
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    throw new Error('Image upload failed: ' + error.message);
  }
};

module.exports = { uploadImage };