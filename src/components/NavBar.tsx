import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { MdOutlineExitToApp } from "react-icons/md";
import userStore from "../zustand/userStore";
import { useEffect, useState } from "react";

function NavBar() {
  const [isAuth, setIsAuth] = useState(
    userStore.getState().user.isAuthenticated
  );

  const handleClick = () => {
    userStore.getState().logout();
    window.location.reload();
  };

  useEffect(() => {
    const loginStatus = userStore.getState().user.isAuthenticated;
    if (loginStatus == false) {
      setIsAuth(false);
    }
    if (loginStatus == true) {
      setIsAuth(true);
    }
  }, [userStore.getState().user.isAuthenticated]);

  return (
    <div className="main-nav">
      <Link className="link" to={"/"}>
        Home
      </Link>

      <h1 className="thankText">RateMyLecture.</h1>
      {isAuth && (
        <button className="btn-nav" onClick={handleClick}>
          <MdOutlineExitToApp /> Logout
        </button>
      )}
    </div>
  );
}

export default NavBar;
