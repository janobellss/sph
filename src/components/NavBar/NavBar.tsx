import { Link } from "react-router-dom";

import swLogo from "../../assets/sw_logo.png";

const NavBar = () => {
  return (
    <nav className="bg-black/75 border-b-[3px] border-white/30 p-4">
      <div className="container mx-auto flex flex-col justify-center items-center gap-2">
        <div className="font-bold text-xl">
          <Link to="/" className="flex items-center">
            <img src={swLogo} alt="Star Wars Logo" className="h-24 w-auto" />
          </Link>
        </div>
        <div className="border-t border-white/50 w-56 m-3"></div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <div className="mx-4 border-r border-white/50 h-6"></div>
          <li>
            <Link to="/search" className="hover:text-yellow-400">
              Search
            </Link>
          </li>
          <div className="mx-4 border-r border-white/50 h-6"></div>
          <li>
            <Link to="/favorites" className="hover:text-yellow-400">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
