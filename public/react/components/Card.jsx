import styled from "styled-components";
import CardsList from "./CardsList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 20px;
`;

const CardStyle = styled.div`
  background-color: lightgray;
  height: auto;
  width: auto;
  min-width: 300px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  box-shadow: 0px 0px 20px black;
  border-radius: 10px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
  background-color: white;
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
`;

const TitleAndPart = styled.div`
  padding: 0px 0 5px 5px;
  width: 50%;
  height: 100%;
`;

const TitleFont = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
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

const AddToCardButton = styled.div`
  text-align: center;
  width: 100%;
  background-color: black;
  color: white;
  height: auto;
  font-size: 1.4rem;
  margin-top: 7px;
  border-radius: 15px;
  user-select: none;
  box-shadow: 0px 0px 20px gray;


  &:active {
    background-color: gray;
  }
`;

export default function Card() {
  return (
    <>
      <Wrapper>
        <CardStyle>
          <ItemImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
          <InfoWrapper>
            <TitleAndPart>
              <TitleFont>Title</TitleFont>
              <PartFont>Part#</PartFont>
            </TitleAndPart>
            <QuantityNumber>
              <i>{10}</i><p>in stock</p>
            </QuantityNumber>
          </InfoWrapper>
        </CardStyle>
        <AddToCardButton>Add to Cart</AddToCardButton>
      </Wrapper>
    </>
  );
}
