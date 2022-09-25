import { createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    uploadData: {
      name: "",
      discription: "",
      init_date: "",
      completion_date: "",
      category: "",
      images: [],
    },
  },
  reducers: {
    setUploadData(state, action) {
      state.uploadData = {
        name: action.payload.name,
        discription: action.payload.discription,
        init_date: action.payload.init_date,
        completion_date: action.payload.completion_date,
        category: action.payload.category,
        images: action.payload.images,
      };
    },
  },
});

export const uploadAction = uploadSlice.actions;
export default uploadSlice;
