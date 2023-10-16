import { useState, useEffect } from "react";

// Components
import SWTable from "../SWTable/SWTable";

// Hooks
import { useAppSelector } from "../../app/hooks";

// Services
import { useSearchCharacterQuery } from "../../services/starWars";
import { Person } from "../../types/people";

type SearchCharacterProps = {
  query: string;
};

const SearchCharacter = ({ query }: SearchCharacterProps) => {
  const { data, isLoading, error } = useSearchCharacterQuery(query);
  const favoriteCharacters = useAppSelector((state) => state.favorites.people);
  const [tableData, setTableData] = useState<Person[]>([]);

  useEffect(() => {
    if (data && data.results.length) {
      const updatedData = data.results.map((result) => {
        const isFavorite = favoriteCharacters.some(
          (favoriteCharacter) => favoriteCharacter.name === result.name
        );
        return { ...result, isFavorite };
      });

      setTableData(updatedData);
    }
  }, [data, favoriteCharacters]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Loading failed. Please try again.</p>
      ) : (
        <SWTable data={tableData} />
      )}
    </>
  );
};

export default SearchCharacter;
