import styled from "styled-components";
import Card from "./Card";

const CardWrapper = styled.div`
  background-color: gray;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function CardsList() {
  return (
    <>
    <CardWrapper>
      <Card />
    </CardWrapper>
    </>
  )
}
