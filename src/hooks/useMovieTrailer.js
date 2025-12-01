import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrailer } from "../store/movieSlice.js";
import { API_Options } from "../utils/constants.js";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();
    const { signal } = controller;

    const fetchMovieTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            ...API_Options,
            signal, // attach abort signal
          },
        );

        const { results } = await res.json();

        const trailer =
          results?.find((v) => v.type === "Trailer") ||
          results?.find((v) => v.type === "Teaser") ||
          results?.[0] ||
          null;

        if (!signal.aborted) {
          dispatch(setTrailer(trailer));
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Trailer fetch failed:", err);
        }
      }
    };

    fetchMovieTrailer();

    return () => controller.abort();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
