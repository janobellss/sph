// Components
import SearchResults from "../../components/SearchResults/SearchResults";

// Services
import { useSearchCharacterQuery } from "../../services/starWars";

type SearchCharacterProps = {
  query: string;
};

const SearchCharacter = ({ query }: SearchCharacterProps) => {
  const { data, isLoading, error } = useSearchCharacterQuery(query);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Loading failed. Please try again.</p>
      ) : (
        <SearchResults results={data?.results || []} />
      )}
    </>
  );
};

export default SearchCharacter;
