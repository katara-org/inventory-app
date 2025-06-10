import styled from "styled-components";
import Button from "./Button";
import React, { useState, useEffect, useContext } from "react";
import { AllStatesContext } from "./App";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  width: 220px;         
  height: 85vh;      
  background: #dd2a3b;    
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  padding: 16px;
  position: fixed;
  top: 1;
  left: 0;
  margin-left: 15px;
  color: white;
`;

const TitleFont = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PartFont = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;

const QuantityNumber = styled.div`
  padding: 0px 0 5px 5px;
  width: 50%;
  height: 100%;
  border-left: 1px solid black;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 40%; 
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



export default function SideBar() {
  const {items, setFilteredItems} = useContext(AllStatesContext)

  const [maxPrice, setMaxPrice] = useState(0); //These are the filters that will be applied to the items
  const [mens, setMens] = useState(false);
  const [womens, setWomens] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [jewelery, setJewelery] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  async function handleFilter() {
    let newItems = items;
    if (maxPrice> 0){
      newItems = items.filter(item => item.price < maxPrice); 
    }
    if (mens) {
      newItems = newItems.filter(item => item.category === "men's clothing");
    } else if (womens) {
      newItems = newItems.filter(item => item.category === "women's clothing");
    } else if (electronics) {
      newItems = newItems.filter(item => item.category === "electronics");
    } else if (jewelery) {
      newItems = newItems.filter(item => item.category === "jewelery");
    }

    if (ascending) { //sorting if ascending or descending is selected
    newItems = [...newItems].sort((a, b) => a.price - b.price);
    } else if (descending) {
      newItems = [...newItems].sort((a, b) => b.price - a.price);
    }

    setFilteredItems(newItems);
    
  }

  async function removeFilters() {
    setFilteredItems(items);
    //setMaxPriceFilter(false);
    setMaxPrice(0);
    setMens(false);
    setWomens(false);
    setElectronics(false);
    setJewelery(false);
    setAscending(false);
    setDescending(false);
  }

  return ( <>
    <Wrapper>
      <h2>Multistore</h2><br/>
      <span style={{gap: "5px"}} > Max Price:
      <StyledInput type="number" step="10" min="0" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}></StyledInput>
      </span>
      <TitleFont>Categories</TitleFont>
      <label style={{gap: "5px", display: "flex", alignItems: "center", cursor: "pointer"}}> 
        <input type="checkbox" checked={mens} onChange={() => setMens(!mens)} />
        Mens
      </label>
      <label style={{gap: "5px", display: "flex", alignItems: "center", cursor: "pointer"}}> 
        <input type="checkbox" checked={womens} onChange={() => setWomens(!womens)} />
        Womens
      </label>
      <label style={{gap: "5px", display: "flex", alignItems: "center", cursor: "pointer"}}> 
        <input type="checkbox" checked={electronics} onChange={() => setElectronics(!electronics)} />
        Electronics
      </label>
      <label style={{gap: "5px", display: "flex", alignItems: "center", cursor: "pointer"}}> 
        <input type="checkbox" checked={jewelery} onChange={() => setJewelery(!jewelery)} />
        Jewelery
      </label>
      <br/>
      <TitleFont>Sort</TitleFont>
      <label style={{gap: "5px", display: "flex", alignItems: "center", cursor: "pointer"}}> 
        <input type="radio" checked={ascending} onChange={() => {setAscending(true); setDescending(false);}} />
        Ascending Price
      </label>
      <label style={{gap: "5px", display: "flex", alignItems: "center", cursor: "pointer"}}> 
        <input type="radio" checked={descending} onChange={() => {setAscending(false); setDescending(true);}} />
        Descending Price
      </label>
      <br/>
      <Button style={{width: "180px", boxShadow: "none", border: "solid", borderColor: "white" }} onClick={handleFilter} >Apply Filters</Button>
      <Button style={{width: "180px", boxShadow: "none", border: "solid", borderColor: "white" }} onClick={removeFilters} >Reset Filters</Button>
    </Wrapper>
    </>
  );
}