// This defines the data structure (schema) for users in your database.
// I've updated the module.exports line to prevent circular dependency errors.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false, // Do not send password back in queries by default
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'team-member'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// --- Mongoose Middleware ---
// This function runs before a user document is saved.
// It hashes the password to keep it secure.
UserSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// --- Mongoose Methods ---
// This method compares a candidate password with the stored hashed password.
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// FIX: Check if the model already exists before creating it.
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);