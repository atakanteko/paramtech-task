import ProtectedRoute from "../pages/ProtectedRoute";
import MainLayout from "../layouts/main/MainLayout";
import PackageList from "../pages/packages/PackageList";
import Payment from "../pages/payment/Payment";
import PaymentStatus from "../pages/payment/PaymentStatus";

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
        {
            path: '/payment-status',
            element: <PaymentStatus />,
        },
    ],
};

export default MainRoutes;