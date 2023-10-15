import { useState } from "react";

// Components
import Card from "../Card/Card";

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
    <Card className="flex items-center max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pr-10 pl-4 bg-black/75 text-white rounded focus:outline-none focus:ring-1 focus:ring-yellow-400"
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
    </Card>
  );
};

export default SearchBar;
