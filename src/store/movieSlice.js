import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: {},
    selectedMovie: null,
    trailer: null,
  },
  reducers: {
    setMoviesByCategory: (state, action) => {
      const { category, movies } = action.payload;
      state.list[category] = movies;

      if (movies.length > 0 && !state.selectedMovie) {
        state.selectedMovie = movies[0];
      }
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setMoviesByCategory, setTrailer, setSelectedMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
