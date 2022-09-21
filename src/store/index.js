import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallery-slice";
import modalSlice from "./modal-slice";

const store=configureStore({
    reducer:{
        gallery:gallerySlice.reducer,
        modal:modalSlice.reducer
    }
})

export default store;