import AuthenticationLayout from "../layouts/authentication/AuthenticationLayout";
import Login from "../pages/Login";

const AuthenticationRoutes = {
    path: '/',
    element: <AuthenticationLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
    ],
  };
  
  export default AuthenticationRoutes;