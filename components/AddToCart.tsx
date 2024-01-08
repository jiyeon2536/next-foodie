"use client";
export default function AddToCart() {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log("add to cart");
      }}
    >
      Add To Cart
    </button>
  );
}
