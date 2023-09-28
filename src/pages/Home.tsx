import Rating from "../components/Rating";
import FeedBack from "../components/Feedback";
import "../styles/home.css";
import Alert from "../components/Alert";
import { useState, useEffect } from "react";
import Lesson from "../components/Lesson";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type Lesson = {
  [key: string]: any;
};

function Home() {
  const [tittle, setTittle] = useState<string>("");
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [rated, setRated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const fetchLesson = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/lesson/current"
      );
      const data = response.data;
      const lesson = data.data;
      return lesson;
    } catch (error: any) {
      setError(true);
      setMessage(error.response.data.message);
      setType("error");
      setTitle("Error");
    }
  };

  const lessonQuery = useQuery({
    queryKey: ["lesson"],
    queryFn: fetchLesson,
  });
  lessonQuery.isLoading && console.log("Loading...");
  lessonQuery.isError && console.log("Error");
  lessonQuery.isSuccess && console.log("Success");
  useEffect(() => {
    if (lessonQuery.data) {
      setLesson(lessonQuery.data);
    }
  }, [lessonQuery.data]);
  console.log(lesson);

  return (
    <div className="main">
      <div className="brand">
        <img src="images/brandImg.jpg" alt="brandImg" />
      </div>
      <div className="action">
        {(success || error) && (
          <Alert
            setSuccess={setSuccess}
            type={type}
            title={title}
            message={message}
          />
        )}

        <Lesson lesson={lesson} />

        {!success && !rated && (
          <Rating
            setMessage={setMessage}
            setType={setType}
            setRated={setRated}
            setSuccess={setSuccess}
            setTitle={setTitle}
            lesson={lesson}
          />
        )}
        {rated && (
          <FeedBack
            setSuccess={setSuccess}
            setTitle={setTitle}
            setMessage={setMessage}
            setType={setType}
            success={success}
            lesson={lesson}
            setError={setError}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
