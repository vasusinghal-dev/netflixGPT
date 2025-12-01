import { useSelector } from "react-redux";
import MoviesRow from "../components/MoviesRow.jsx";
import { MOVIE_CATEGORIES } from "../config/movieCategories.js";

const BrowseMovies = () => {
  const movieList = useSelector((store) => store.movie?.list);

  if (!movieList) return null;

  return (
    <div className="relative z-30 -mt-80 px-14 pb-32 space-y-10">
      {MOVIE_CATEGORIES.map(({ key, title }) => (
        <MoviesRow key={key} title={title} moviesList={movieList[key]} />
      ))}
    </div>
  );
};

export default BrowseMovies;
