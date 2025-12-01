import HeroSection from "../components/HeroSection.jsx";
import BrowseMovies from "../components/BrowseMovies.jsx";
import { MOVIE_CATEGORIES } from "../config/movieCategories.js";
import useLoadCategories from "../hooks/useLoadCategories.js";

const Browse = () => {
  useLoadCategories(MOVIE_CATEGORIES);

  return (
    <div className="relative bg-black text-white min-h-screen">
      <HeroSection />
      <BrowseMovies />
    </div>
  );
};

export default Browse;
