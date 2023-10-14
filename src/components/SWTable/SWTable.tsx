import { Link } from "react-router-dom";

// Hooks
import { useAppDispatch } from "../../app/hooks";

// Actions
import {
  addToFavorites,
  removeFromFavorites,
} from "../../features/favorites/favoritesSlice";

// Types
import { FavoritePerson } from "../../types/people";

type SWTableProps = {
  data: FavoritePerson[];
};

const SWTable = ({ data }: SWTableProps) => {
  const dispatch = useAppDispatch();

  const addToFavoritesHandler = (person: FavoritePerson) => {
    dispatch(addToFavorites(person));
  };

  const removeFromFavoritesHandler = (name: string) => {
    dispatch(removeFromFavorites(name));
  };

  return (
    <>
      {data.length < 1 ? (
        <p>
          No Records Found! Please go to search and search for your favorite
          character.
        </p>
      ) : (
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Character Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Birth Year
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.birth_year}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {item.gender}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <Link
                            to={`/person-details/${item.name}`}
                            className="text-yellow-500 hover:text-yellow-600"
                          >
                            View Full Details
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.isFavorite ? (
                            <button
                              onClick={() =>
                                removeFromFavoritesHandler(item.name)
                              }
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SWTable;
