import { Link } from "react-router-dom";

const SearchOverlay = ({ results, loading, error }) => {
  if (!results) return null;
  if (error) return <p className="text-red-500 text-sm">{error}</p>;

  return (
    <div className="absolute top-12 -right-8 bg-black/90 w-96 max-h-96 overflow-y-auto rounded-lg shadow-lg p-4 border border-gray-700 z-50">
      {loading && <p className="text-gray-400 text-sm">Searching…</p>}

      {!loading && results.length === 0 && (
        <p className="text-gray-400 text-sm">No results found.</p>
      )}

      <ul className="space-y-3">
        {results.map(
          (item) =>
            item.poster_path && (
              <li key={item.id}>
                <Link
                  to={`/details/${item.media_type}/${item.id}`}
                  className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded transition"
                >
                  <img
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                        : "https://via.placeholder.com/92x138?text=No+Image"
                    }
                    alt=""
                    className="w-12 rounded"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white">
                      {item.title || item.name}
                    </p>
                    <p className="text-xs text-gray-400 uppercase">
                      {item.media_type} | {item.vote_average.toFixed(1)} ★
                    </p>
                  </div>
                </Link>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default SearchOverlay;
