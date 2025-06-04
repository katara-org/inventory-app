import React, { useState } from 'react';

function DeleteForm({ onItemDeleted }) {
  const [itemId, setItemId] = useState('');

  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/items/${itemId}`, {
        method: "DELETE"
      });

      if (res.ok) {
        onItemDeleted(parseInt(itemId)); 
        setItemId('');
        alert(`Item ${itemId} deleted successfully`);
      } else {
        const data = await res.json();
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <h3>Delete Item</h3>
      <input
        name="itemId"
        placeholder="Enter Item ID"
        value={itemId}
        onChange={handleChange}
        required
        type="number"
      />
      <button type="submit">Delete Item</button>
    </form>
  );
}

export default DeleteForm;
