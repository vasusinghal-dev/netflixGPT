import { useState } from "react";
import useNowPlaying from "../hooks/useNowPlaying.js";
import HeroSection from "../components/HeroSection.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  const [page, setPage] = useState(1);

  const { loadMore, loadingNowPlaying } = useNowPlaying();
  const moviesList = useSelector((store) => store.movie?.nowPlaying);
  const { original_title, overview, id } = moviesList?.[0] || {};

  const handleLoad = () => {
    const next = page + 1;
    setPage(next);
    loadMore(next);
  };

  return (
    <div className="relative bg-black text-white min-h-screen">
      <HeroSection originalTitle={original_title} overview={overview} id={id} />

      {/* Load More Button */}
      <div className="flex justify-center my-8">
        <button
          onClick={handleLoad}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-bold text-lg cursor-pointer"
        >
          {loadingNowPlaying ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Browse;
