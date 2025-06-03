import React, { useEffect, useState } from "react";
import Header from "./Header";

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
      {/* Render the items */}
    </>
  );
}

export default App;
