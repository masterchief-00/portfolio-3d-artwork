import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallery-slice";
import modalSlice from "./modal-slice";
import monitorSlice from "./monitor-slice";
import renderSlice from "./render-slice";
import uploadSlice from "./upload-slice";

const store = configureStore({
  reducer: {
    gallery: gallerySlice.reducer,
    modal: modalSlice.reducer,
    upload: uploadSlice.reducer,
    monitor: monitorSlice.reducer,
    render: renderSlice.reducer,
  },
});

export default store;
