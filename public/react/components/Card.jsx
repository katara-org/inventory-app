import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 20px;
`;

const CardStyle = styled.div`
  background-color: lightwhite;
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
  overflow: hidden;
`;

const TitleAndPart = styled.div`
  padding: 0px 0 5px 5px;
  width: 50%;
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
  padding: 0px 0 5px 5px;
  width: 50%;
  height: 100%;
  border-left: 1px solid black;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Card({ item }) {
  if (!item) {
    return <>null!</>;
  }

  return (
    <>
      <Wrapper>
        <CardStyle>
          <ItemImage src={item.image} />
          <InfoWrapper>
            <TitleAndPart>
              <TitleFont>{item.name}</TitleFont>
              <PartFont>#{item.id}</PartFont>
            </TitleAndPart>
            <QuantityNumber>
              <b>${item.price}</b>
              <br />
              <p>in stock: {item.quantity}</p>
            </QuantityNumber>
          </InfoWrapper>
          
        </CardStyle>
        <BtnWrapper>
                  <Button>Add to Cart</Button>
        </BtnWrapper>
      </Wrapper>
    </>
  );
}
