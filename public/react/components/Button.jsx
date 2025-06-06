import styled from "styled-components";

const StyleButton = styled.button`
  text-align: center;
  width: 300px;
  background-color: #dd2a3b;
  color: white;
  height: auto;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 8px 27px;
  margin-top: 7px;
  border: none;
  border-radius: 10px;
  user-select: none;
  
  box-shadow: 0px 0px 20px gray;
  border: none;

  &:hover{
  background-color: #a02028;
  cursor: pointer;
  }

  &:active {
    background-color: #a02028;
  }
`;

export default function Button({children, onClick, type, style}) {

    return(
        <>
        <StyleButton style={style} onClick={onClick} type={type} >{children}</StyleButton>
        </>
    )

}