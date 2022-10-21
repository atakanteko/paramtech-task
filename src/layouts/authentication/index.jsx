import { Outlet } from "react-router-dom";

function AuthenticationLayout() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export default AuthenticationLayout;
