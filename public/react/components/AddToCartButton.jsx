import { useContext } from "react";
import Button from "./Button";
import { AllStatesContext } from "./App";

export default function AddToCartButton({ item }) {
  const { handleAddToCart } = useContext(AllStatesContext)
  return (
    <>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </>
  );
}
