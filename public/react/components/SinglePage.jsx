import styled from "styled-components";
import CardsList from "./CardsList";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 20px;
`;

const CardStyle = styled.div`
  background-color: lightgray;
  width: 300px;
  height: 350px;
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

export default function SinglePage({item}) {
  return (
    <>
      <Card item={item}/>
    </>
  );
}
