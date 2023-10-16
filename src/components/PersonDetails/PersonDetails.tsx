import { useState } from "react";

// Hooks
import { useAppDispatch, useAppSelector } from "../../app/hooks";

// Actions
import {
  addToFavorites,
  removeFromFavorites,
} from "../../features/favorites/favoritesSlice";

// Components
import Card from "../Card/Card";
import Message from "../Message/Message";

// Types
import { Person } from "../../types/people";

import profileImage from "../../assets/placeholder.png";

type PersonDetailProps = {
  person: Person;
};

const PersonDetail = ({ person }: PersonDetailProps) => {
  const favoriteCharacters = useAppSelector((state) => state.favorites.people);
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const isFavorite = favoriteCharacters.some(
    (favoriteCharacter) => favoriteCharacter.name === person.name
  );

  const addToFavoritesHandler = (person: Person) => {
    dispatch(addToFavorites(person));
    setNotification(`${person.name} is added to your favorite list!`);
  };

  const removeFromFavoritesHandler = (name: string) => {
    dispatch(removeFromFavorites(name));
    setNotification(`${name} is removed from your favorite list!`);
  };

  return (
    <>
      {notification && (
        <Message message={notification} onClose={() => setNotification(null)} />
      )}
      <Card className="flex">
        <img
          src={profileImage}
          alt="Star Wars Logo"
          className="h-96 w-auto border border-yellow-400/30 rounded"
        />

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-extrabold">{person.name}</h2>
          <div className="flex flex-col gap-5">
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
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
              </div>

              <div className="space-y-1">
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
          </div>

          {isFavorite ? (
            <button
              onClick={() => removeFromFavoritesHandler(person.name)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded transform transition-transform hover:scale-105"
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
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded transform transition-transform hover:scale-105"
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
      </Card>
    </>
  );
};

export default PersonDetail;
