import Rating from "../components/Rating";
import FeedBack from "../components/Feedback";
import "../styles/home.css";
import Alert from "../components/Alert";
import { useState } from "react";

function Home() {
  const [rated, setRated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  return (
    <div className="main">
      <div className="brand">
        <img src="images/brandImg.jpg" alt="brandImg" />
      </div>
      <div className="action">
        {success && (
          <Alert
            setSuccess={setSuccess}
            type={type}
            title={title}
            message={message}
          />
        )}
        {!success && !rated && (
          <Rating
            setMessage={setMessage}
            setType={setType}
            setRated={setRated}
            setSuccess={setSuccess}
            setTitle={setTitle}
          />
        )}
        {rated && (
          <FeedBack
            setSuccess={setSuccess}
            setTitle={setTitle}
            setMessage={setMessage}
            setType={setType}
            success={success}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
