import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { MdOutlineExitToApp } from "react-icons/md";
import userStore from "../zustand/userStore";
import { useState } from "react";

function NavBar() {
  const [isAuth, setIsAuth] = useState(
    userStore.getState().user.isAuthenticated
  );

  // useEffect(() => {
  //   if (isAuth === false) {
  //     navigate("/");
  //   }
  // }, [isAuth]);

  const handleClick = () => {
    userStore.getState().logout();
    setIsAuth(false);
    window.location.reload();
  };

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
