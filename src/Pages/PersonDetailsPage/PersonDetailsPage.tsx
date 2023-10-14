import { useParams, useNavigate } from "react-router-dom";

// Components
import PersonDetail from "../../components/PersonDetails/PersonDetails";

// Services
import { useSearchCharacterQuery } from "../../services/starWars";

const PersonDetailsPage = () => {
  const navigate = useNavigate();
  const { name = "" } = useParams<{ name: string }>();
  const { data: character, isLoading, error } = useSearchCharacterQuery(name);

  const onGoBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center py-14 px-32 gap-8">
      <button className="self-start" onClick={onGoBackHandler}>
        Go Back
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Loading failed. Please try again.</p>
      ) : (
        <>
          {character?.results[0] && (
            <PersonDetail person={character?.results[0]} />
          )}
        </>
      )}
    </div>
  );
};

export default PersonDetailsPage;
