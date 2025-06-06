import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiURL from "../api";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 25px;
  gap: 7px;
  `;

const StyledInput = styled.input`
  width: 100%; 
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #888;
    outline: none;
    background: #f8f8f8;
  }
`;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   width: 100%;
//   height: 50px;
//   background-color: black;
//   color: white;
//   font-size: 1.4rem;
//   margin-top: 7px;
//   border-radius: 15px;
//   user-select: none;
//   border: none;
//   &:active {
//     background-color: black;
//   }
//   &:hover {
//     cursor: pointer;
//     background-color: ${({ hover }) => hover || 'darkgray'};
//   }  
// `;

function DeleteForm({ handleItemDeleted }) {
  const [itemId, setItemId] = useState("");

  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiURL}/items/${itemId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        handleItemDeleted(parseInt(itemId));
        setItemId("");
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
      <Wrapper>
      <h3>Enter the ID of an Item to delete</h3>
      <StyledInput
        min={1}
        name="itemId"
        placeholder="Enter Item ID"
        value={itemId}
        onChange={handleChange}
        required
        type="number"
      />
      <Button type="submit">Delete Item</Button>
      </Wrapper>
    </form>
  );
}

export default DeleteForm;
