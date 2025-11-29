import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice.js";
import movieSliceReducer from "./movieSlice.js";

const appStore = configureStore({
  reducer: { user: userSliceReducer, movie: movieSliceReducer },
});

export default appStore;
