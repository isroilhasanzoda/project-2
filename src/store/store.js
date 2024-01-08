import { configureStore } from "@reduxjs/toolkit";
// import todos from "../reels/reels"
import home from "../home/home";
export const store = configureStore({
  reducer: {
    home,
  },
});
