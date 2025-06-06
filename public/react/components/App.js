import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CardsList from "./CardsList";
import SinglePage from "./SinglePage";
import AddForm from "./AddForm";
import { Route, Routes } from "react-router-dom";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";
import CreateUserMenu from "./CreateUserMenu";

import apiURL from "../api";

const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${apiURL}/items`);
        const itemsData = await response.json();
        setItems(itemsData);
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
    setItems((prevItems) => prevItems.filter((item) => item.id !== deletedId));
  };

  const handleItemUpdated = (updatedItem) => {
    setItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  };
  

  return (
    <>
      <Header />
      <BodyStyle>
        <Routes>
          <Route path="/" element={<CardsList items={items} />} />
          <Route path="/item/:id" element={<SinglePage handleItemUpdated={handleItemUpdated} handleItemDeleted={handleItemDeleted} />} />
          <Route
            path="/create-item"
            element={<AddForm handleItemAdded={handleItemAdded} />}
          />
          <Route
            path="/delete-items"
            element={<DeleteForm handleItemDeleted={handleItemDeleted}/>}
          />
          <Route
            path="/edit-item/:id"
            element={<UpdateForm handleItemUpdated={handleItemUpdated}/>}
          />
          <Route
            path="/login-form"
            element={<CreateUserMenu />}
          />
        </Routes>
      </BodyStyle>
    </>
  );
}

export default App;
