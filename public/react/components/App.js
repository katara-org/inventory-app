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
import SideBar from "./SideBar";

import apiURL from "../api"; //import host/api/...

const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-left: 204px; // Adjusted to account for the sidebar width
`;

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${apiURL}/items`);
        const itemsData = await response.json();
        setItems(itemsData);
        setFilteredItems(itemsData);
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
  
  const handleUserAdded = (newUser) => {
    setItems(prevUsers => prevUsers.map(user => user.id === newUser.id ? newUser : user));
  };
  

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} currentUser={currentUser} />
      <BodyStyle>
        <Routes>
          <Route path="/" element={<> <SideBar items={items} setItems={setItems} filteredItems={filteredItems} setFilteredItems={setFilteredItems} /> 
                                      <CardsList items={filteredItems} /> </>} />
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
            element={<CreateUserMenu setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} handleUserAdded={handleUserAdded} />}
          />
        </Routes>
      </BodyStyle>
    </>
  );
}

export default App;
