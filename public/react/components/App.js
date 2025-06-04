import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CardsList from "./CardsList";
import SinglePage from "./SinglePage"
import Card from "./Card";

const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

// Prepend the API URL to any fetch calls.
import apiURL from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [singleView, setSingleView] = useState(false);
  const [item, setItem] = useState(null); //this is for single item view

  useEffect(() => {
    async function fetchItems () {
      try {
        const response = await fetch(`${apiURL}/items`)
        const itemsData = await response.json()
        setItems(itemsData);
        //console.log(itemsData);
        //setPage(false);
        //setShowCreate(false);
      } catch (err) {
        console.log('Oh no an error! ', err)
      }
    }

    fetchItems()
  }, []);

  return (
    <>
      <Header />
      <BodyStyle>
        {!singleView 
          ? <CardsList items={items} setSingleView={setSingleView} setItem={setItem} /> 
          : <SinglePage item={item} setSingleView={setSingleView} />}
      </BodyStyle>
    </>
  );
}

export default App;
