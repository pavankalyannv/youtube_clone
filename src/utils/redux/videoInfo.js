import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  text: "",
  videoList: []
};

const videoInfo = createSlice({
  name: "details",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.id = action.payload;
    },
    searchText: (state, action) => {
      state.text = action.payload;
    },
    addvideos: ( state, action) => {
      state.videoList = action.payload
    }
  },
});

export const { addDetails, searchText, addvideos } = videoInfo.actions;

export default videoInfo.reducer;
