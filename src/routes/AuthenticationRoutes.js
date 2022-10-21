import AuthenticationLayout from "../layouts/authentication";
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