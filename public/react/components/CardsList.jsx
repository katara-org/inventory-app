import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

const GridWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: auto;
`;

const CardWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`;

export default function CardsList({ items }) {
  return (
    <GridWrapper>
      <CardWrapperGrid>
        {items.map((item) => (
          <StyledLink key={item.id} to={`/item/${item.id}`}>
            <Card item={item} />
          </StyledLink>
        ))}
      </CardWrapperGrid>
    </GridWrapper>
  );
}
