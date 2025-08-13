const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const asyncHandler = require('express-async-handler');
const { protect } = require('../middleware/authMiddleware');

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private (requires login)
router.post('/', protect, asyncHandler(async (req, res) => {
    console.log("got to order")
    const { orderItems, shippingAddress, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            user: req.user._id, // Get user ID from the token via middleware
            orderItems,
            shippingAddress,
            totalPrice,
        });

        console.log(req.body)
        console.log(order)

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
}));

// @desc    Get logged in user's orders
// @route   GET /api/orders/myorders
// @access  Private
router.get('/myorders', protect, asyncHandler(async (req, res) => {
    // Find orders for the user ID from the token
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
}));


module.exports = router;