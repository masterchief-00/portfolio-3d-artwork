import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallery-slice";
import modalSlice from "./modal-slice";
import uploadSlice from "./upload-slice";

const store = configureStore({
  reducer: {
    gallery: gallerySlice.reducer,
    modal: modalSlice.reducer,
    upload: uploadSlice.reducer,
  },
});

export default store;
