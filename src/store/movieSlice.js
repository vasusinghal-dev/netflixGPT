import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    trailer: null,
  },
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMoreNowPlaying: (state, action) => {
      state.nowPlaying = [...state.nowPlaying, ...action.payload];
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { setNowPlaying, addMoreNowPlaying, setTrailer } =
  movieSlice.actions;
export default movieSlice.reducer;
