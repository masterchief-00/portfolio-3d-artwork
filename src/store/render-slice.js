import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
  name: "render",
  initialState: {
    projectData: {
      title: "",
      body: "",
      imageSource: "",
    },
  },
  reducers: {
    setProjectData(state, action) {
      state.projectData = {
        title: action.payload.title,
        body: action.payload.body,
        imageSource: action.payload.imageSource,
      };
    },
  },
});

export const renderActions=renderSlice.actions;
export default renderSlice;
