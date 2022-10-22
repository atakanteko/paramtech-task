import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../components/pages/LoginForm";

function Login() {
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.user)
    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/package-list');
            });
        }
    }, [user, navigate]);
  return (
    <section className="login-card">
      <LoginForm />
    </section>
  );
}

export default Login;
