import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    error: null,
    isEmpty: true,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.isEmpty = state.cartItems.length === 0;
    },
    clearCart(state) {
      state.cartItems = [];
      state.isEmpty = true;
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.isEmpty = state.cartItems.length === 0;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setError } =
  cartSlice.actions;
export default cartSlice.reducer;
