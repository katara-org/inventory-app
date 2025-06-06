const express = require("express");
const { Item } = require("../models");

const router = express.Router();
router.use(express.json());

// Define your routes here
// GET all items
router.get("/", async (req, res) => {
    const items = await Item.findAll();
    res.json(items);
  });
  
  // GET one item
  router.get("/:id", async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  });
  
  // UPDATE item
  router.put("/:id", async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    if (price <= 0) {
      return res.status(400).json({ error: "Price cannot be $0" });
    }
  
    try {
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // DELETE item
  router.delete("/:id", async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
  
    await item.destroy();
    res.json({ message: "Item deleted" });
  });

// CREATE new item with basic validation
router.post("/", async (req, res) => {
  const { name, price, quantity, category, image } = req.body;

  if (!name || !category || !image) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (price <= 0) {
    return res.status(400).json({ error: "Price cannot be $0" });
  }

  if (quantity < 0) {
    return res.status(400).json({ error: "Quantity cannot be negative" });
  }

  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
