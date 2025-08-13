const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

/**
 * @desc   Protects routes by verifying JWT and attaching the user to the request object.
 * @route  Middleware
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check for the authorization header and ensure it's a Bearer token
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      // Extract token from the "Bearer <token>" string
      token = authHeader.split(' ')[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by the ID from the token payload, excluding the password field
      req.user = await User.findById(decoded.id).select('-password');
      
      // If a user is not found with that ID (e.g., user was deleted), deny access
      if (!req.user) {
        res.status(401);
        throw new Error('User not found');
      }

      // User is authenticated, proceed to the next middleware or route handler
      next();
    } catch (error) {
      res.status(401);
      // Catches JWT verification errors (e.g., expired token, invalid signature)
      throw new Error('Not authorized, token failed');
    }
  } else {
    // If no token or incorrect header is found
    res.status(401);
    throw new Error('Not authorized, no token provided');
  }
});

/**
 * @desc   Authorizes admin users. Should be used *after* the 'protect' middleware.
 * @route  Middleware
 */
const admin = (req, res, next) => {
  // 'protect' middleware should have already run and attached the user object
  if (req.user && req.user.role === 'admin') {
    next(); // User is an admin, proceed
  } else {
    res.status(403); // 403 Forbidden for non-admin users
    throw new Error('Not authorized as an admin');
  }
};

module.exports = { protect, admin };