import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";

const routesConfig = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/people/",
		element: <PeoplePage />,
	},
	{
		path: "/people/:id",
		element: <PersonPage />,
	},
	{
		path: "/favorites",
		element: <FavoritesPage />,
	},
	{
		path: "/not-found",
		element: <NotFoundPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];

export default routesConfig;
