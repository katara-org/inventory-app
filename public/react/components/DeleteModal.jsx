import styled from "styled-components";

const ModalWrapper = styled.div`
    display: flex;
    justify-conent: center;
    align-items: center:
    flex-flow: column nowrap;
    width: 20vw;
    max-width: 30vw;
    min-height: 20vh;
    max-height: 30vh;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  background-color: black;
  padding: 2px 10px;
  color: white;
  font-size: 1.4rem;
  margin-top: 7px;
  border-radius: 15px;
  user-select: none;
  &:active {
    background-color: #333333;
  }
  &:hover {
    cursor: pointer;
    background-color: #333333};
  }
`;

export default function DeleteModal({handleCancelClick, handleDelete, confirmDelete}) {
  return (
    <>
      <ModalWrapper>
        <BtnContainer>
            <Button onClick={handleDelete}>Confirm Delete</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
        </BtnContainer>
      </ModalWrapper>
    </>
  );
}
