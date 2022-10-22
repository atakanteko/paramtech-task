import ProtectedRoute from "../pages/ProtectedRoute";
import MainLayout from "../layouts/main/MainLayout";
import PackageList from "../pages/PackageList";
import Payment from "../pages/Payment";

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
        {
            path: '/payment',
            element: <Payment />,
        },
    ],
};

export default MainRoutes;