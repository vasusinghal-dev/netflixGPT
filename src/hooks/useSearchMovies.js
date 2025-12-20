import { useState, useEffect } from "react";
import { API_Options } from "../utils/constants.js";

const useSearchMovies = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}`,
          {
            ...API_Options,
            signal,
          }
        );

        const data = await res.json();

        if (!signal.aborted) {
          const filtered =
            data.results?.filter(
              (item) => item.media_type === "movie" || item.media_type === "tv"
            ) || [];

          setResults(filtered);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Search fetch failed:", err);
          if (!signal.aborted) setError("Failed to fetch search results");
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchSearchResults();

    return () => controller.abort();
  }, [query]);

  return { results, loading, error };
};

export default useSearchMovies;
