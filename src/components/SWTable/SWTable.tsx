import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks
import { useAppDispatch } from "../../app/hooks";

// Actions
import {
  addToFavorites,
  removeFromFavorites,
} from "../../features/favorites/favoritesSlice";

// Components
import Card from "../Card/Card";
import Message from "../Message/Message";

// Types
import { FavoritePerson } from "../../types/people";

type SWTableProps = {
  data: FavoritePerson[];
};

const SWTable = ({ data }: SWTableProps) => {
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const addToFavoritesHandler = (person: FavoritePerson) => {
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
      {data.length < 1 ? (
        <p>No Records Found!</p>
      ) : (
        <Card className="flex flex-col">
          <table className="min-w-full divide-y divide-white/30">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Character Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Birth Year
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                ></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/30">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">
                      {item.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{item.birth_year}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded bg-yellow-300 text-yellow-800">
                      {item.gender}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    <Link
                      to={`/person-details/${item.name}`}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      View Full Details
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {item.isFavorite ? (
                      <button
                        onClick={() => removeFromFavoritesHandler(item.name)}
                        className=""
                      >
                        Remove From Favorites
                      </button>
                    ) : (
                      <button
                        onClick={() => addToFavoritesHandler(item)}
                        className=""
                      >
                        Add To Favorites
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </>
  );
};

export default SWTable;
