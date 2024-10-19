import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch selected category");
    const productsData = await response.json();
    return productsData;
  }
);
export const fetchProductsByCategory = createAsyncThunk(
  "categories/fetchProductsByCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) throw new Error("Failed to fetch selected category");

    const selectedCategory = await response.json();
    return selectedCategory;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    selectedCategoryProducts: [],
    status: { productsDataStatus: "idle", selectedCategoryStatus: "idle" },
    error: null,
  },
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsDataStatus = "Loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsDataStatus = "fulfilled";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsDataStatus = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status.selectedCategoryStatus = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status.selectedCategoryStatus = "fulfilled";
        state.selectedCategoryProducts = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status.selectedCategoryStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export const { addproduct } = productSlice.actions;
export default productSlice.reducer;
