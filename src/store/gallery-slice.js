import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    tab: { type: "cgi" },
    projects: [
      { id: 1, name: "Biplane" },
      { id: 2, name: "Spartan 117" },
      { id: 3, name: "Earth" },
      { id: 4, name: "Mad Max" },
      { id: 5, name: "Alien Skull" },
      { id: 6, name: "Statue" },
      { id: 7, name: "Klingon Rifle" },
      { id: 8, name: "Colonial Blaster" },
      { id: 9, name: "Klingon Pistol" },
      { id: 10, name: "Orville Rifle" },
      { id: 11, name: "Picard Rifle" },
      { id: 13, name: "Klingon Miner Rifle" },
      { id: 12, name: "Shock Rifle" },
      { id: 14, name: "Y'shi skull" },
      { id: 15, name: "Y'shi skull" },
      { id: 16, name: "Linzhee Skull" },

    ],
    currentProject: {},
  },
  reducers: {
    switchTab(state, action) {
      state.tab = {
        type: action.payload.type,
      };
    },
    loadProjectDetails(state, action) {
      const index = Number(action.payload);

      const existingProject = state.projects.find(
        (project) => project.id === index
      );

      if (existingProject) {
        state.currentProject = existingProject;
      }
    },
  },
});
export const galleryActions = gallerySlice.actions;
export default gallerySlice;
