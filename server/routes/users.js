// routes/users.js
const express = require('express');
const router = express.Router();
const { User } = require('../models');

// GET all users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET a user by ID
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({where: {username}})
  if (!user) {
    return res.status(404).json({error: "User doesn't exist"})
  }
  if (user.password !== password) {
    return res.status(401).json({error: "Wrong password"})
  }
  res.json(user);
});

// POST a new user
router.post('/', async (req, res) => {
  const {username, password} = req.body;
  const user = await User.create(req.body)
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
