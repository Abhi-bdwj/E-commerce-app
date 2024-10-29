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
      const { product, selectedSize, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...product, selectedSize, quantity });
      }

      if (state.cartItems.length === 0) {
        state.isEmpty = true;
      } else {
        state.isEmpty = false;
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.isEmpty = true;
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      if (state.cartItems.length === 0) {
        state.isEmpty = true;
      } else {
        state.isEmpty = false;
      }
    },

    setError(state, action) {
      state.error = action.payload;
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setError,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
