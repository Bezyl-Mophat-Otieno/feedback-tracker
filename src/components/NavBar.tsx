import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { MdOutlineExitToApp } from "react-icons/md";
import userStore from "../zustand/userStore";
import { useEffect, useState } from "react";

function NavBar() {
  const [stateChange, setStateChange] = useState(false);
  const isAuth = userStore.getState().user.isAuthenticated;
  console.log(isAuth);
  const handleClick = () => {
    userStore.getState().logout();
  };

  return (
    <div className="main-nav">
      <Link className="link" to={"/"}>
        Home
      </Link>

      <Link className="link" to={"/admin"}>
        Admin Dashboard
      </Link>
      {isAuth && (
        <button className="btn-nav" onClick={handleClick}>
          <MdOutlineExitToApp /> Logout
        </button>
      )}
    </div>
  );
}

export default NavBar;
