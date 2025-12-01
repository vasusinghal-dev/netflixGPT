import { useDispatch } from "react-redux";
import { TMDB_IMG_Base_URL } from "../utils/constants.js";
import { setSelectedMovie } from "../store/movieSlice.js";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={movie.id}
      className="
              relative group w-80 shrink-0 
              transition-all duration-300
              hover:scale-[1.30] hover:-translate-y-12 hover:z-20
            "
    >
      {/* Poster */}
      <img
        src={TMDB_IMG_Base_URL + movie.backdrop_path}
        alt={movie.title}
        className="
                w-full rounded-md
                transition-all duration-300
                group-hover:rounded-t-md
                group-hover:rounded-b-none
              "
      />

      {/* Modern Netflix-like Hover Box */}
      <div
        className="
                absolute left-0 right-0 -bottom-20
                bg-gray-900 text-white p-3 rounded-b-md
                hidden translate-y-2
                group-hover:block group-hover:translate-y-0
                transition-all duration-300 ease-out
                z-30 
              "
      >
        {/* Icons row */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-3">
            <button
              className="px-2 py-1 bg-white text-black rounded cursor-pointer"
              onClick={() => dispatch(setSelectedMovie(movie))}
            >
              ▶
            </button>
            <button className="px-2 py-1 bg-gray-600 rounded cursor-pointer">
              ＋
            </button>
            <button className="px-2 py-1 bg-gray-600 rounded cursor-pointer">
              👍
            </button>
            <button className="px-2 py-1 bg-gray-600 rounded cursor-pointer">
              ✖
            </button>
          </div>

          <button className="px-3 py-1 bg-gray-600 rounded cursor-pointer">
            ⬇
          </button>
        </div>

        <div className="text-sm text-gray-300">Animation • Family • Comedy</div>
      </div>
    </div>
  );
};
export default MovieCard;
