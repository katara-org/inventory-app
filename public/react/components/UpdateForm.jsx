import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateByIdForm({ handleItemUpdated }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: ""
  });

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(`http://localhost:3000/api/items/${id}`)
        const data = await res.json();
        setFormData({
          name: data?.name,
          price: data?.price,
          description: data?.description,
          category: data?.category,
          image: data?.image,
        })
      } catch (err) {
        console.error("Error occurred: ", err)
      }
    }

    if (id) fetchItem()
  }, [id])

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        handleItemUpdated(data);
        alert(`Item ${id} updated successfully`);
        navigate(`/item/${id}`)
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
      {/* <input
        name="id"
        type="number"
        placeholder="Enter Item ID"
        value={id}
        required
      /> */}
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
        min={0.01}
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
