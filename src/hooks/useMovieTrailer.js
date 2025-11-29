import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrailer } from "../store/movieSlice.js";
import { API_Options } from "../utils/constants.js";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_Options,
      );
      const { results } = await res.json();
      const trailer =
        results.find((video) => video.type === "Trailer") ||
        results.find((video) => video.type === "Teaser") ||
        results[0] ||
        null;

      dispatch(setTrailer(trailer));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    fetchMovieTrailer();
  }, [movieId]);
};

export default useMovieTrailer;
