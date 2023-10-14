// Hooks
import { useAppSelector } from "../../app/hooks";

// Components
import SWTable from "../../components/SWTable/SWTable";

const Favorites = () => {
  const favoritePeople = useAppSelector((state) => state.favorites.people);

  return (
    <div>
      <p className="mb-4">Favorites</p>
      <SWTable data={favoritePeople} />
    </div>
  );
};

export default Favorites;
