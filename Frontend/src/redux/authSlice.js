import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;

  localStorage.setItem(
    "token",
    action.payload.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(action.payload.user)
  );

  localStorage.setItem(
    "role",
    action.payload.user.role
  );
},

    logout: (state) => {
  state.user = null;
  state.token = null;

  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
},
  },
});

export const {
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;