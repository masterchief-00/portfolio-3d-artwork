import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: { status: false } },
  reducers: {
    setIsopen(state, action) {
      state.isOpen = {
        status: action.payload.status,
      };
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice;
