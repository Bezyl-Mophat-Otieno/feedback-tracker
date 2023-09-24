import "../styles/saferea.css";
import Button from "../components/Button";
function SafeArea() {
  return (
    <>
      <div className="areaContainer">
        <div className="brand">
          <img src="images/safe.jpg" alt="brandImg" />
        </div>
      </div>
      <Button action="Authenticate" />
    </>
  );
}

export default SafeArea;
