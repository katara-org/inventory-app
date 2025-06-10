import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
import { useContext } from "react";
import { AllStatesContext } from "./App";

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 93vh;
  overflow-y: hidden;
`;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: auto auto;
  height: 100%;
`;

const CartItemList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 0rem;
  min-width: 100%;
  max-width: 150%;
  background-color: rgb(228, 228, 228);
  border-radius: 8px;
  padding: 0 100px 40px;
  max-height: 80vh;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const CardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-flow: column nowrap;
`;

const PriceCheckoutSection = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background: #f5f5f5;
  margin-right: auto;
`;

const RemoveFromCartButton = styled.button`
  width: auto;
  height: auto;
  cursor: pointer;
  border: none;
  background-color: inherit;
  text-decoration: underline;
  margin: 5px 8px 0 0;
`;

const NoItemsText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-flow: column nowrap;
`;

const Emoji = styled.img`
  height: 30vh;
  width: 30vw;
`;

const SadFace = styled.div`
  font-weight: 600;
  font-size: 8rem;
  width: auto;
  margin: 0 auto;
  transform: rotate(90deg);
`;

export default function CheckoutCart() {

  const {cart, currentUser, handleRemoveFromCart} = useContext(AllStatesContext)
  const total = cart.reduce((acc, item) => acc + item.price, 0);
 

  return (
    <CartWrapper>
      <CartItemContainer>
        {cart.length === 0 ? (
          <NoItemsText>
            <h1>You have nothing in your Cart!</h1>
            <SadFace>:(</SadFace>
          </NoItemsText>
        ) : (
          <div>
            <h1>{currentUser.username}'s cart</h1>
            <CartItemList>
              {cart.map((item, i) => (
                <CardItem key={i}>
                  <Card item={item}></Card>
                  <RemoveFromCartButton
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove Item
                  </RemoveFromCartButton>
                </CardItem>
              ))}
            </CartItemList>
          </div>
        )}
      </CartItemContainer>

      <PriceCheckoutSection>
        <h1>Total: ${total.toFixed(2)}</h1>
        <Button>Checkout</Button>
      </PriceCheckoutSection>
    </CartWrapper>
  );
}
