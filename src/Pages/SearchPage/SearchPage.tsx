import { useState } from "react";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchCharacter from "../../components/Search/SearchCharacter";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchCharacters = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col items-center justify-center py-14 px-32 gap-6">
      <p className="text-xl text-center">
        Try searching for your favorite Star Wars character
      </p>
      <SearchBar onSearch={searchCharacters} />

      {searchQuery && <SearchCharacter query={searchQuery} />}
    </div>
  );
};

export default SearchPage;
