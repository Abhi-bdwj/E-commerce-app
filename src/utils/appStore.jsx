import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import productsReducer from "../utils/productSlice";
import categoriesReducer from "../utils/categoriesSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    categories:categoriesReducer,
  },
});
export default appStore;
