import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/" className="hover:text-yellow-400">
            Star Wars
          </Link>
        </div>
        <ul className="text-white flex space-x-4">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="hover:text-yellow-400">
              Search
            </Link>
          </li>
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
