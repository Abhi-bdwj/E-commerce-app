import React from "react";
import CartPage from "@/components/cart/CartPage";
import { useSelector } from "react-redux";
import RelatedProducts from "../components/products/RelatedProducts";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart) || [];
  console.log(cartItems);
  return (
    <div>
      <CartPage items={cartItems} />
      {cartItems.length > 0 ? <RelatedProducts /> : null}
    </div>
  );
};

export default Cart;
