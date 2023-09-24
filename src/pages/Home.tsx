import Rating from "../components/Rating";
import FeedBack from "../components/Feedback";
import Button from "../components/Button";
import "../styles/home.css";

function Home() {
  return (
    <div className="main">
      <div className="brand">
        <img src="images/brandImg.jpg" alt="brandImg" />
      </div>
      <div className="action">
        <Rating />
        <FeedBack />
        <Button action="submit" />
      </div>
    </div>
  );
}

export default Home;
