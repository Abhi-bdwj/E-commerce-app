import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    loginFailure(state, action) {
      state.error = action.error.message;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUserInfo(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});
export const { loginFailure, loginSuccess, logout, updateUserInfo } =
  userSlice.actions;
export default userSlice.reducer;
