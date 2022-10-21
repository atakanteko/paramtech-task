import { useRoutes } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRoutes';

export default function Router() {
    return useRoutes([AuthenticationRoutes]);
}