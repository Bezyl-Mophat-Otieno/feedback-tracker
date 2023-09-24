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
        <Button action="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
