import styled from "styled-components";
import Button from "./Button";

const CartWrapper = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function CheckoutCart() {

    return (
        <>
        <Button>Checkout</Button>
        </>
    )
}