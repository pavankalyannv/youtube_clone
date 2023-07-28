import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state, action) => {
      state.isOpen = false;
    },
    openMenu: (state, action) => {
      state.isOpen = true;
    }
  },
});

export const { toggleMenu,  closeMenu, openMenu} = sideBarSlice.actions;
export default sideBarSlice.reducer;
