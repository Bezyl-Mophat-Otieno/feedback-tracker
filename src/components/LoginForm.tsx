import "../styles/loginform.css";
import Button from "./Button";
function LoginForm() {
  return (
    <div className="loginContainer">
      <form>
        <div>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
