import ProtectedRoute from "../pages/ProtectedRoute";
import MainLayout from "../layouts/main/MainLayout";
import PackageList from "../pages/PackageList";

const MainRoutes = {
    path: '/',
    element: (
        <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            path: '/package-list',
            element: <PackageList />,
        },
    ],
};

export default MainRoutes;