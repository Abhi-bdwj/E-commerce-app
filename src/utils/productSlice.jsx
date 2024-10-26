import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit = 194) => {
    //limit can be set to 194 for all items
    const response = await fetch(
      `https://dummyjson.com/products/?limit=${limit}`
    );
    if (!response.ok) throw new Error("Failed to fetch selected category");
    const productsData = await response.json();
    return productsData.products;
  }
);
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category_URL) => {
    const response = await fetch(`${category_URL}`);
    if (!response.ok) throw new Error("Failed to fetch selected category");

    const selectedCategory = await response.json();
    console.log("selectedcategoryproducts", selectedCategory.products);
    return selectedCategory.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    selectedCategoryProducts: [],
    selectedCategoryURL: null,
    status: { productsDataStatus: "idle", selectedCategoryStatus: "idle" },
    error: null,
  },
  reducers: {
    updateSelectedCategoryURL(state, action) {
      state.selectedCategoryURL = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status.productsDataStatus = "Loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status.productsDataStatus = "fulfilled";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status.productsDataStatus = "failed";
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
export const {
  addproduct,
  updateSelectedCategoryURL,
  addProductDetails,
  resetProductDetails,
} = productSlice.actions;
export default productSlice.reducer;
