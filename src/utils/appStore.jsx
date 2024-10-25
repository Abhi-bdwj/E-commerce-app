import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import productsReducer from "../utils/productSlice";
import categoriesReducer from "../utils/categoriesSlice";
import cartReducer from "../utils/cartSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});
export default appStore;
