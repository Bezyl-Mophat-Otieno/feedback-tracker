import "../styles/login.css";
import LoginForm from "../components/LoginForm";
type props = {
  [key: string]: any;
};
function Login({ setIsAuth, isAuth }: props) {
  return (
    <div className="main">
      <div className="brand">
        <img src="images/login.jpg" alt="brandImg" />
      </div>
      <LoginForm setIsAuth={setIsAuth} isAuth={isAuth} />
    </div>
  );
}

export default Login;
