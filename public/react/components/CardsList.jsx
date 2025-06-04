import styled from "styled-components";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  background-color: gray;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`

export default function CardsList({ items }) {
  return (
    <CardWrapper>
      {items.map((item) => (
        <StyledLink key={item.id} to={`/item/${item.id}`}>
          <Card item={item} />
        </StyledLink>
      ))}
    </CardWrapper>
  );
}
