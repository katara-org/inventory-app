import React, { useState } from "react";

function UpdateByIdForm({ onItemUpdated }) {
  const [itemId, setItemId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  const handleIdChange = (e) => {
    setItemId(e.target.value);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!itemId) {
      alert("Please enter an Item ID");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/items/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        onItemUpdated(data);
        alert(`Item ${itemId} updated successfully`);
        setItemId("");
        setFormData({ name: "", price: "", description: "", category: "", image: "" });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Failed to update item", error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h3>Update Item by ID</h3>
      <input
        name="itemId"
        type="number"
        placeholder="Enter Item ID"
        value={itemId}
        onChange={handleIdChange}
        required
      />
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        step="0.01"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  );
}

export default UpdateByIdForm;
