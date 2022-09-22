import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: { status: false },
    showAdminAccess: { status: false },
    messaging: { name: "", email: "", message: "" },
    loginForm: { userName: "", password: "" },
  },
  reducers: {
    setIsopen(state, action) {
      state.isOpen = {
        status: action.payload.status,
      };
    },
    setAdminAcess(state, action) {
      state.showAdminAccess = {
        status: action.payload.status,
      };
    },
    setMessage(state, action) {
      state.messaging = {
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message,
      };
      if (
        state.messaging.name === "I AM" &&
        state.messaging.email === "THE" &&
        state.messaging.message === "ADMIN"
      ) {
        state.showAdminAccess.status = true;
      }
    },
    setLoginForm(state, action) {
      state.loginForm = {
        userName: action.payload.userName,
        password: action.payload.password,
      };
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice;
