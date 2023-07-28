import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import videoInfo from "./videoInfo";

const store = configureStore({
  reducer: {
    sidbar: sideBarSlice,
    search: searchSlice,
    details: videoInfo,
  },
});

export default store;
