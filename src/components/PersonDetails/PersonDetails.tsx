// Hooks
import { useAppDispatch } from "../../app/hooks";

// Actions
import {
  addToFavorites,
  removeFromFavorites,
} from "../../features/favorites/favoritesSlice";

// Types
import { FavoritePerson, Person } from "../../types/people";

type PersonDetailProps = {
  person: FavoritePerson;
};

const PersonDetail = ({ person }: PersonDetailProps) => {
  const dispatch = useAppDispatch();

  // Upon adding to favorites / removing from favorites store
  // the data should be updated in the API then send back to the store
  // so we always have the latest / updated data
  const addToFavoritesHandler = (person: Person) => {
    dispatch(addToFavorites(person));
  };

  const removeFromFavoritesHandler = (name: string) => {
    dispatch(removeFromFavorites(name));
  };

  return (
    <div className="bg-black text-white rounded-lg shadow-lg p-4 w-80 relative">
      <h2 className="text-2xl font-extrabold mb-2">{person.name}</h2>
      <div className="border-t-2 border-solid border-white pt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p>
              <strong>Height:</strong> {person.height}
            </p>
            <p>
              <strong>Mass:</strong> {person.mass}
            </p>
            <p>
              <strong>Hair Color:</strong> {person.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {person.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {person.eye_color}
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <strong>Birth Year:</strong> {person.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {person.gender}
            </p>
            <p>
              <strong>Homeworld:</strong>{" "}
              <a href={person.homeworld} target="_blank">
                Homeworld Link
              </a>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p>
            <strong>Films:</strong>
          </p>
          <ul className="list-disc pl-6">
            {person.films.map((film, index) => (
              <li key={index}>
                <a href={film} target="_blank">
                  Film {index + 1}
                </a>
              </li>
            ))}
          </ul>
          <p>
            <strong>Vehicles:</strong>
          </p>
          <ul className="list-disc pl-6">
            {person.vehicles.map((vehicle, index) => (
              <li key={index}>
                <a href={vehicle} target="_blank">
                  Vehicle {index + 1}
                </a>
              </li>
            ))}
          </ul>
          <p>
            <strong>Starships:</strong>
          </p>
          <ul className="list-disc pl-6">
            {person.starships.map((starship, index) => (
              <li key={index}>
                <a href={starship} target="_blank">
                  Starship {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {person.isFavorite ? (
        <button
          onClick={() => removeFromFavoritesHandler(person.name)}
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transform transition-transform hover:scale-105 absolute bottom-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 inline mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Remove From Favorites
        </button>
      ) : (
        <button
          onClick={() => addToFavoritesHandler(person)}
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transform transition-transform hover:scale-105 absolute bottom-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 inline mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add To Favorites
        </button>
      )}
    </div>
  );
};

export default PersonDetail;
