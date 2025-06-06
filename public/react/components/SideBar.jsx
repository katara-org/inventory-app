import styled from "styled-components";
import Button from "./Button";
import React, { useState, useEffect } from "react";

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



export default function SideBar({items, setItems, filteredItems, setFilteredItems}) {

  const [maxPrice, setMaxPrice] = useState(0); //These are the filters that will be applied to the items
  //const [maxPriceFilter, setMaxPriceFilter] = useState(false);
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
      //setFilteredItems(items.filter(item => item.price < maxPrice));
    }
    if (mens) {
      //setFilteredItems(filteredItems.filter(item => item.category === "men's clothing"));
      newItems = newItems.filter(item => item.category === "men's clothing");
    } else if (womens) {
      //setFilteredItems(filteredItems.filter(item => item.category === "women's clothing"));
      newItems = newItems.filter(item => item.category === "women's clothing");
    } else if (electronics) {
      // setFilteredItems(filteredItems.filter(item => item.category === "electronics"));
      newItems = newItems.filter(item => item.category === "electronics");
    } else if (jewelery) {
      // setFilteredItems(filteredItems.filter(item => item.category === "jewelery"));
      newItems = newItems.filter(item => item.category === "jewelery");
    }

    if (ascending) {
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
      {/* <input type="checkbox" checked={maxPriceFilter} onChange = {(e) => setMaxPriceFilter(true)} ></input>  */}
      </span>
      <TitleFont>Categories</TitleFont>
      <span style={{gap: "5px"}} > Mens:
      <input type="checkbox" checked={mens} onChange = {(e) => setMens(!mens)} ></input>
      </span>
      <span style={{gap: "5px"}} > Womens:
      <input type="checkbox" checked={womens} onChange = {(e) => setWomens(!womens)} ></input>
      </span>
      <span style={{gap: "5px"}} > Electronics:
      <input type="checkbox" checked={electronics} onChange = {(e) => setElectronics(!electronics)} ></input>
      </span>
      <span style={{gap: "5px"}} > Jewelery:
      <input type="checkbox" checked={jewelery} onChange = {(e) => setJewelery(!jewelery)} ></input>
      </span><br/>
      <TitleFont>Sort</TitleFont>
      <span style={{gap: "5px"}} > Ascending Price:
      <input type="radio" checked={ascending} onChange = {() => {setAscending(true); setDescending(false);}} ></input>
      </span>
      <span style={{gap: "5px"}} > Descending Price:
      <input type="radio" checked={descending} onChange = {() => {setAscending(false); setDescending(true);}} ></input>
      </span><br/>
      <Button style={{width: "180px", boxShadow: "none", border: "solid", borderColor: "white" }} onClick={handleFilter} >Apply Filters</Button>
      <Button style={{width: "180px", boxShadow: "none", border: "solid", borderColor: "white" }} onClick={removeFilters} >Reset Filters</Button>
    </Wrapper>
    </>
  );
}