import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu,  closeMenu} = sideBarSlice.actions;
export default sideBarSlice.reducer;
