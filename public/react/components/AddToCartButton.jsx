import Button from "./Button";

export default function AddToCartButton({ handleAddToCart, item }) {
  return (
    <>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </>
  );
}
