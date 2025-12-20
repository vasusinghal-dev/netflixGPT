import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMoviesByCategory } from "../store/movieSlice.js";
import { API_Options } from "../utils/constants.js";

const useLoadCategories = (categories = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) return;

    const controllers = [];

    const fetchAll = async () => {
      await Promise.all(
        categories.map(async (category) => {
          const controller = new AbortController();
          controllers.push(controller);

          try {
            const res = await fetch(
              `https://api.themoviedb.org/3/${category?.media_type}/${category?.key}?page=1`,
              { ...API_Options, signal: controller.signal },
            );

            if (!res.ok) {
              // if TMDB returns 4xx/5xx, handle gracefully
              console.warn(`Failed to fetch ${category.key}`, res.status);
              dispatch(
                setMoviesByCategory({ category: category.key, movies: [] }),
              );
              return;
            }

            const json = await res.json();
            dispatch(
              setMoviesByCategory({
                category: category.key,
                movies: json.results || [],
              }),
            );
          } catch (err) {
            if (err.name !== "AbortError") console.error(err);
          }
        }),
      );
    };

    fetchAll();

    return () => controllers.forEach((c) => c.abort());
  }, [categories, dispatch]);
};

export default useLoadCategories;
