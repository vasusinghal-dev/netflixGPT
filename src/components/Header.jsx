import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import accountIcon from "../assets/Account_Icon.png";
import helpCenter from "../assets/HelpCenter_Icon.png";
import { useState } from "react";
import { signOutUser } from "../utils/auth.js";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const navigate = useNavigate();

  const handleSignout = async () => {
    const { success, error } = await signOutUser();
    if (success) {
      navigate("/");
    } else {
      console.error(error);
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="w-32"
        />

        {/* Navigation */}
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
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none"
        />

        {/* Profile dropdown */}
        <div className="relative">
          <div
            className="flex justify-center items-center gap-1 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="User"
              className="w-8 h-8 rounded cursor-pointer"
            />
            {/* Small arrow */}
            <svg
              className={`w-3 h-3 text-white transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Dropdown menu */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-black/90 rounded shadow-lg transition-all duration-200 transform ${
              dropdownOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col p-2 text-sm">
              {/* Profile row */}
              <li className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 cursor-pointer">
                <img
                  src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                  alt="User"
                  className="w-6 h-6 rounded"
                />
                <span>{user?.name || "User"}</span>
              </li>

              {/* Account */}
              <li className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 cursor-pointer">
                <img src={accountIcon} alt="Account Icon" className="w-5 h-5" />
                <span>Account</span>
              </li>

              {/* Help Center */}
              <li className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 cursor-pointer">
                <img src={helpCenter} alt="Help Icon" className="w-5 h-5" />
                <span>Help Center</span>
              </li>

              {/* Divider */}
              <div className="border-t border-gray-700 my-2"></div>

              {/* Sign out */}
              <li
                className="py-2 px-2 text-center text-xs hover:bg-gray-700 cursor-pointer"
                onClick={handleSignout}
              >
                Sign Out of Netflix
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
