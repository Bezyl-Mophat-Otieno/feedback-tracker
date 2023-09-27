import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="main-nav">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/login"}>
        Login
      </Link>
      <Link className="link" to={"/admin"}>
        Admin Dashboard
      </Link>
      <Link className="link" to={"/safe"}>
        Safe Dashboard
      </Link>
    </div>
  );
}

export default NavBar;
