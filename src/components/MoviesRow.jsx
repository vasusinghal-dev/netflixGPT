import MovieCard from "./MovieCard.jsx";

const MoviesRow = ({ title, moviesList }) => {
  if (!moviesList?.length) return null;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-3 px-1 flex items-center gap-2 group cursor-pointer">
        {title}
        <span
          className="
      transition-transform 
      duration-300 
      transform 
      translate-x-0 
      group-hover:translate-x-2
      opacity-0 
      group-hover:opacity-100
    "
        >
          &gt;
        </span>
      </h2>

      <div className="flex gap-3 py-2 px-1">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesRow;
