import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";
import PersonDetailsPage from "../Pages/PersonDetailsPage/PersonDetailsPage";
import SearchPage from "../Pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "person-details/:name",
        element: <PersonDetailsPage />,
      },
    ],
  },
]);
