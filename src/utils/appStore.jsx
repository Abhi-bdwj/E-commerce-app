import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import productsReducer from "../utils/productSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});
export default appStore;
