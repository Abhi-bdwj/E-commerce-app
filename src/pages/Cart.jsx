import React from "react";
import CartItem from "@/components/cart/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div>
      <CartItem items={cartItems} />
    </div>
  );
};

export default Cart;






