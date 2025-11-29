import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import searchIcon from "../assets/Search_Icon.png";
import accountIcon from "../assets/Account_Icon.png";
import helpCenter from "../assets/HelpCenter_Icon.png";
import { useState } from "react";
import { signOutUser } from "../utils/auth.js";
import { netflixLogo, userBadgeIcon } from "../utils/constants.js";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // state to toggle search bar

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  const handleSignout = async () => {
    const { success, error } = await signOutUser();
    if (success) console.log("Signed out");
    else console.error(error);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo & navigation */}
      <div className="flex items-center gap-8">
        <img src={netflixLogo} alt="Netflix Logo" className="w-32" />
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
              placeholder="Search"
              className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none w-60"
              autoFocus={searchOpen} // focus only when opened
            />
          </div>
          <img
            src={searchIcon}
            alt="Search"
            className="w-10 cursor-pointer"
            onClick={toggleSearch}
          />
        </div>

        {/* Profile dropdown */}
        <div className="relative">
          <div
            className="flex justify-center items-center gap-1 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img src={userBadgeIcon} alt="User" className="w-8 h-8 rounded" />
            <svg
              className={`w-3 h-3 text-white transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded shadow-lg transition-all duration-200">
              <ul className="flex flex-col p-2 text-sm">
                <li className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 cursor-pointer">
                  <img
                    src={userBadgeIcon}
                    alt="User"
                    className="w-6 h-6 rounded"
                  />
                  <span>{user?.name || "User"}</span>
                </li>
                <li className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 cursor-pointer">
                  <img src={accountIcon} alt="Account" className="w-5 h-5" />
                  <span>Account</span>
                </li>
                <li className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 cursor-pointer">
                  <img src={helpCenter} alt="Help" className="w-5 h-5" />
                  <span>Help Center</span>
                </li>
                <div className="border-t border-gray-700 my-2"></div>
                <li
                  className="py-2 px-2 text-center text-xs hover:bg-gray-700 cursor-pointer"
                  onClick={handleSignout}
                >
                  Sign Out of Netflix
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
