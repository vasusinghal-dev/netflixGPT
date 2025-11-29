import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice.js";

const appStore = configureStore({
  reducer: { user: userSliceReducer },
});

export default appStore;
