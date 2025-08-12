const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['Video Games', 'Consoles', 'Accessories', 'Collectibles'],
  },
  platform: {
    type: String,
    required: true,
    enum: ['PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'PC']
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// FIX: Check if the model already exists before creating it.
module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
