import React, { useState } from 'react';
import styled from "styled-components";
import apiURL from "../api";
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  justify-content: space-around;
  width: 70%;
`;


const FormWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-flow: column nowrap;
  margin-top: 20px;
  gap: 5px;
  width: 50%;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  margin-top: 7px;
  border-radius: 15px;
  user-select: none;
  &:active {
    background-color: black;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ hover }) => hover || 'darkgray'};
  }  
`;

const Preview = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  border-radius: 10px;`;



function AddForm({ handleItemAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
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
      const res = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        handleItemAdded(data); 
        setFormData({ name: '', price: '', description: '', category: '', image: '' });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Failed to add item", error);
    }
  };

  return (<>
    <Wrapper>
      <form onSubmit={handleSubmit}>  
        <FormWrapper>
          <Title>Add New Item</Title>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
          <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
          <Button type="submit">Add Item</Button>
          
        </FormWrapper>
        
      </form>
      <Preview>
        <Title> Preview: </Title>
        <Card item={{
          name: formData.name,
          price: formData.price,
          description: formData.description,
          category: formData.category,
          image: formData.image
        }} />
      </Preview>
    </Wrapper>
      </>
  );
}

export default AddForm;
