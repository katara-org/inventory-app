// routes/orders.js
const express = require("express");
const router = express.Router();
const { Order, User } = require("../models");

// GET all orders
router.get("/", async (req, res) => {
  const orders = await Order.findAll({ include: User });
  res.json(orders);
});

// POST new order
router.post("/", async (req, res) => {
  const { userId, status } = req.body;

  // Check if userId was provided
  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  // Check if user exists
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Create the order
  try {
    const order = await Order.create({ userId, status });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
