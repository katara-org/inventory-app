import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AllStatesContext, CartContext } from "./App";

const HeaderWrapper = styled.div`
  background-color: rgb(224, 224, 224);
  color: #dd2a3b;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; /* or whatever spacing you want between buttons */
  margin-left: 20px; /* spacing from the HomeIcon */
`;

const HeaderContentLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

const HeaderContentRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 45%;
`;

const HomeIcon = styled.img`
  height: 50px;
  min-width: 50px;

  filter: brightness(0) saturate(100%) invert(20%) sepia(48%) saturate(5292%)
    hue-rotate(-1deg) brightness(96%) contrast(101%);

  &:hover {
    filter: brightness(0) saturate(100%) invert(20%) sepia(35%) saturate(5292%)
      hue-rotate(-1deg) brightness(96%) contrast(101%);
  }

  &:active {
    filter: brightness(0) saturate(100%) invert(20%) sepia(35%) saturate(5292%)
      hue-rotate(-1deg) brightness(96%) contrast(101%);
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  user-select: none;
`;

const StyledHeader = styled.div`
  color: black;
  text-decoration: none;
  user-select: none;
`;

const LoginIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-size: 1.1rem;
  &:hover {
    color: #333333;
  }
`;

const LogoutIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-size: 1.1rem;
  &:hover {
    color: #333333;
  }
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 25px;
  font-size: 1.3rem;
  margin-left: 15px;
  color: white;
`;

const UserLogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartCheckoutIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

export default function Header()
  // isLoggedIn,
  // currentUser,
  // setIsLoggedIn,
  // setCart,
 {

  const {isLoggedIn, currentUser, setIsLoggedIn, setCart} = useContext(AllStatesContext)
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <HeaderContentLeft>
          <StyledLink to="/">
            <HomeIcon src="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
          </StyledLink>
          {!currentUser || currentUser.role !== 'admin' ?
          ' ': <ButtonGroup>
            <StyledLink to="/create-item">
              <Button
                style={{
                  color: "white",
                  fontWeight: "600",
                  width: "180px",
                  padding: "5px 0",
                  margin: "0 5px 0 5px",
                }}
              >
                Create an Item
              </Button>
            </StyledLink>
            <StyledLink to="/delete-items">
              <Button
                style={{
                  color: "white",
                  fontWeight: "600",
                  width: "180px",
                  padding: "5px 0",
                  margin: "0 5px 0 5px",
                }}
              >
                Delete an Item
              </Button>
            </StyledLink>
          </ButtonGroup>
        }
          
        </HeaderContentLeft>
        <HeaderContentRight>
          <StyledHeader>
            {isLoggedIn ? (
              <UserLogoutWrapper>
                <LogoutIcon
                  style={{cursor: "pointer"}}
                  onClick={() => {
                    setCart([]);
                    setIsLoggedIn(false);
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </LogoutIcon>

                <Link to="/checkout-cart">
                  <CartCheckoutIcon src="https://icons.veryicon.com/png/o/application/wq/shopping-cart-34.png" />
                </Link>
                <StyledLink>
                  <UserIcon>
                    {currentUser.username.slice(0, 2).toUpperCase()}
                  </UserIcon>
                </StyledLink>
              </UserLogoutWrapper>
            ) : (
              <StyledLink to="/login-form">
                <LoginIcon>Login</LoginIcon>
              </StyledLink>
            )}
          </StyledHeader>
        </HeaderContentRight>
      </HeaderWrapper>
    </>
  );
}
