import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 10px;
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
