import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  background-color: gray;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const HeaderContentLeft = styled.div`
display: flex; 
justify-content: space-around;
align-items: center;
width: 50%;
`;

const HeaderContentRight = styled.div`
display: flex; 
justify-content: flex-end;
align-items: center;
width: 50%;
`;

const HomeIcon = styled.img`
  height: 50px;
  width: 50px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`

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
    background-color: darkgray;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ hover }) => hover || 'darkgray'};
  }  
`;

const UserIcon = styled.div`
  display: flex;
align-items: center;
  justify-content: center;
width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightblue;
  font-weight: 600;
  border: 1px solid white;
`;

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContentLeft>
                  <StyledLink to="/">
          <HomeIcon src="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
        </StyledLink>
        <StyledLink to='/create-item'>
          <Button>Create an Item</Button>
        </StyledLink>
        <StyledLink to='/delete-items'>
          <Button>Delete an Item</Button>
        </StyledLink>
        </HeaderContentLeft>
        <HeaderContentRight>
          <UserIcon>
            User
          </UserIcon>
        </HeaderContentRight>
      </HeaderWrapper>
    </>
  );
}
