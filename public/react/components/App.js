import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import CardsList from "./CardsList";
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

  useEffect(() => {
    // Fetch the items
  }, []);

  return (
    <>
      <Header />
      <BodyStyle>
        <Card />
      </BodyStyle>
    </>
  );
}

export default App;
