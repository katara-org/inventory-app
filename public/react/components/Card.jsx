import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 20px;
`;

const CardStyle = styled.div`
  background-color: lightgray;
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  box-shadow: 0px 0px 20px black;
  border-radius: 10px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: scale-down;
  background-color: white;
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid black;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const TitleAndPart = styled.div`
  padding: 5px 8px;
  width: 100%;
  height: 100px;
`;

//I've never used line-clamp before!
//Very useful
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
  padding: 5px 8px;
  width: 30%;
  height: 100%;
  border-left: 1px solid gray;
  text-align: left;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`;

export default function Card({ item, handleAddToCart }) {
  console.log(item);
  if (!item) {
    return <>null!</>;
  }

  return (
    <>
      <Wrapper>
        <CardStyle>
          <StyledLink key={item.id} to={`/item/${item.id}`}>
            <ItemImage src={item.image} />
            <InfoWrapper>
              <TitleAndPart>
                <TitleFont>{item.name}</TitleFont>
                <PartFont>#{item.id}</PartFont>
              </TitleAndPart>
              <QuantityNumber>
                <h2>${item.price.toFixed(2)}</h2>
                <br />
                <p>in stock: {item.quantity}</p>
              </QuantityNumber>
            </InfoWrapper>
          </StyledLink>
        </CardStyle>
      </Wrapper>
    </>
  );
}
