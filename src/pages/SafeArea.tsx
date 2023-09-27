import "../styles/saferea.css";
import Button from "../components/Button";
function SafeArea() {
  return (
    <>
      <div className="areaContainer">
        <div className="brand-area">
          <img src="images/safe.jpg" alt="brandImg" />
        </div>
        <button className="btn">Authenticate</button>
      </div>
    </>
  );
}

export default SafeArea;
