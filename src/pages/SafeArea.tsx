import "../styles/saferea.css";
import { useNavigate } from "react-router-dom";
type props = {
  [key: string]: any;
};
function SafeArea({ setIsAuth }: props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="areaContainer">
        <div className="brand-area">
          <img src="images/safe.jpg" alt="brandImg" />
        </div>
        <button className="btn" onClick={handleClick}>
          Authenticate
        </button>
      </div>
    </>
  );
}

export default SafeArea;
