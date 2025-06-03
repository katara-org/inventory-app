import styled from "styled-components";
import Card from "./Card";
import React, { useEffect, useState } from 'react';

const CardWrapper = styled.div`
  background-color: gray;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  `



export default function CardsList({items, setSingleView, setItem}) {
  
  function singleView(itm){
    setItem(itm.item);
    setSingleView(true);
  }

  return (
    <>
    <CardWrapper>
      {items.map((item, idx)=>(
        <div key={idx} onClick={() => singleView({item})}> 
          <Card item={item} /> 
        </div>
      ))}
    </CardWrapper>
    </>
  )
}
