import React, { useState } from 'react';

function AddForm({ onItemAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        onItemAdded(data); 
        setFormData({ name: '', price: '', description: '', category: '', image: '' });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Failed to add item", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Item</h3>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddForm;
