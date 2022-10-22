import { useRoutes } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from "./MainRoutes";
import NotFound from "../pages/NotFound";

export default function Router() {
    return useRoutes([AuthenticationRoutes, MainRoutes, {
        path: '*',
        element: <NotFound />,
    }]);
}