// Components
import SWTable from "../SWTable/SWTable";

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
        <SWTable data={data?.results || []} />
      )}
    </>
  );
};

export default SearchCharacter;
