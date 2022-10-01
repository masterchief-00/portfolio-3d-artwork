import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
  name: "render",
  initialState: {
    projectData: [],
    recents: [],
    ready: false,
  },
  reducers: {
    setProjectData(state, action) {
      const newItem = action.payload;

      for (const element of newItem) {
        let existingItem = state.projectData.find(
          (project) => project.id === element.id
        );
        if (!existingItem) {
          state.projectData.push({
            id: element.id,
            title: element.name,
            body: element.discription,
            imageSource: element.project_image,
          });
          state.ready = true;
        }
      }
    },
    setRecents(state, action) {
      for (
        let index = state.projectData.length;
        index > state.projectData.length - 3;
        index--
      ) {
        state.recents.push(state.projectData[index-1]);
      }
    },
  },
});

export const renderActions = renderSlice.actions;
export default renderSlice;
