import { createSlice } from "@reduxjs/toolkit";

const monitorSlice = createSlice({
  name: "monitor",
  initialState: {
    monitorData: {
      total: 0,
      cgi: 0,
      print: 0,
      visits: 0,
      renders: 0,
      messages: 0,
      ongoing: 0,
      favorites: 0,
    },
  },
  reducers: {
    setMonitorData(state, action) {
      state.monitorData = {
        total: action.payload.total,
        cgi: action.payload.cgi,
        print: action.payload.print,
        visits: action.payload.visits,
        renders: action.payload.renders,
        messages: action.payload.messages,
        ongoing: action.payload.ongoing,
        favorites: action.payload.favorites,
      };
    },
  },
});
export const monitorActions = monitorSlice.actions;
export default monitorSlice;
