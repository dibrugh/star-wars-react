import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        element: HomePage,
    },
    {
        path: '/people',
        element: PeoplePage,
    },
    {
        path: '/not-found',
        element: NotFoundPage,
    },
    {
        path: '*',
        element: NotFoundPage,
    },
];

export default routesConfig;