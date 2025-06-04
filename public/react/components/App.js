import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CardsList from "./CardsList";
import SinglePage from "./SinglePage";
import AddForm from "./AddForm";
import { Route, Routes } from "react-router-dom";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";

const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${apiURL}/items`);
        const itemsData = await response.json();
        setItems(itemsData);
        //console.log(itemsData);
        //setPage(false);
        //setShowCreate(false);
      } catch (err) {
        console.log("Oh no an error! ", err);
      }
    }

    fetchItems();
  }, []);

  const handleItemAdded = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const handleItemDeleted = (deletedId) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== deletedId));
  };

  const handleItemUpdated = (updatedItem) => {
    setItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  
  return (
    <>
      <Header></Header>
      <BodyStyle>
        <Routes>
          <Route path="/" element={<CardsList items={items} />} />
          <Route path="/item/:id" element={<SinglePage />} />
          <Route
            path="/create-item"
            element={<AddForm handleItemAdded={handleItemAdded} />}
          />
        </Routes>
      </BodyStyle>
    </>
  );
}

export default App;
