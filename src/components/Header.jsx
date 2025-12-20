import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import searchIcon from "../assets/Search_Icon.png";
import { useEffect, useState } from "react";
import SearchOverlay from "./SearchOverlay.jsx";
import useSearchMovies from "../hooks/useSearchMovies.js";
import ProfileDropdown from "./ProfileDropdown.jsx";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { results, loading, error } = useSearchMovies(debouncedQuery);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearchQuery("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <header className="flex items-center justify-between px-6 py-4 fixed -top-1 left-0 right-0 z-50 text-white bg-linear-to-b from-black to-transparent">
      {/* Logo & navigation */}
      <div className="flex items-center gap-8">
        <img src={Logo} alt="Netflix Logo" className="w-32" />
        <nav>
          <ul className="flex gap-6 text-sm font-semibold">
            <li>
              <Link to="/browse">Home</Link>
            </li>
            <li>
              <Link to="/browse">TV Shows</Link>
            </li>
            <li>
              <Link to="/browse">Movies</Link>
            </li>
            <li>
              <Link to="/browse">New & Popular</Link>
            </li>
            <li>
              <Link to="/browse">My List</Link>
            </li>
            <li>
              <Link to="/browse">Browse by Language</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right side: search + profile */}
      <div className="flex items-center gap-4">
        {/* Search icon */}
        <div className="flex justify-center items-center">
          <div
            className={` origin-right transition-transform duration-300 ${
              searchOpen ? "scale-x-100" : "scale-x-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search for movies, TV shows…"
              className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none w-72"
              autoFocus={searchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <img
            src={searchIcon}
            alt="Search"
            className="w-10 cursor-pointer"
            onClick={toggleSearch}
          />
          <div className="relative">
            {searchOpen && searchQuery.length > 0 && (
              <SearchOverlay
                results={results}
                loading={loading}
                error={error}
              />
            )}
          </div>
        </div>

        {/* search overlay */}

        <Link
          to={"/search"}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
        >
          AI Search
        </Link>

        {/* Profile dropdown */}
        <div className="relative">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
