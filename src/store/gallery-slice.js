import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: { tab:{type:'cgi'} },
  reducers: {
    switchTab(state, action) {
      state.tab = {
        type: action.payload.type,
      };
    },
  },
});
export const galleryActions = gallerySlice.actions;
export default gallerySlice;
