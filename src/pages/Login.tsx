import "../styles/login.css";
import LoginForm from "../components/LoginForm";
type props = {
  [key: string]: any;
};
function Login() {
  return (
    <div className="main">
      <div className="brand">
        <img src="images/login.jpg" alt="brandImg" />
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
