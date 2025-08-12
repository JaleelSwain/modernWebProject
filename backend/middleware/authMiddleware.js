const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  console.log('--- Inside protect middleware ---');
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('Found "Bearer" token in header.');
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Token extracted:', token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Token verified. Decoded ID:', decoded.id);

      req.user = await User.findById(decoded.id).select('-password');
      console.log('User found:', req.user ? req.user.username : 'No user found');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }

      console.log('Calling next()...');
      next();
    } catch (error) {
      console.error('ERROR in protect middleware:', error.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('No token found in request.');
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };