import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchQuery);
    }
  };

  return (
    <div className="flex items-center max-w-md mx-auto p-2 bg-white rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pr-10 pl-4 text-gray-700 rounded-l-lg focus:outline-none focus:ring focus:ring-yellow-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={onKeyDownHandler}
      />
      <button
        className="bg-yellow-400 text-black py-2 px-4 rounded-r-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
