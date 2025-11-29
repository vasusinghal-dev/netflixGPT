import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNowPlaying, addMoreNowPlaying } from "../store/movieSlice.js";
import { API_Options } from "../utils/constants.js";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const [loadingNowPlaying, setLoadingNowPlaying] = useState(true);

  const fetchNowPlayingMovies = useCallback(
    async (page = 1) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?page=${page}`,
          API_Options,
        );
        const json = await res.json();
        if (page === 1) {
          dispatch(setNowPlaying(json.results || []));
        } else {
          dispatch(addMoreNowPlaying(json.results || []));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingNowPlaying(false);
      }
    },
    [dispatch],
  );

  // load first page
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  // return loadMore function
  const loadMore = useCallback(
    async (page) => {
      await fetchNowPlayingMovies(page);
    },
    [fetchNowPlayingMovies],
  );

  return { loadMore, loadingNowPlaying };
};

export default useNowPlaying;
