import { useEffect } from "react";
import "../styles/lessonstat.css";
import { FaStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

type props = {
  [key: string]: any;
};

function LessonStat({ lesson, setfeedbackData, setButton }: props) {
  const [rating, setRating] = useState<number | null>(null);
  const fetchRating = async (id: string) => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/rating/ratings/${id}`
    );
    const data = await response.data;
    const rating = data.ratings;
    return rating;
  };
  const ratingQuery = useQuery({
    queryKey: ["lessons", lesson.lessonId],
    // enabled: false,
    queryFn: ({ queryKey }) => fetchRating(queryKey[1]),
  });

  const fetchLessonFeedback = async (id: string) => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/feedback/get/${id}`
    );
    const data = response.data;
    const feedbacks = data.data;
    return feedbacks;
  };

  const lessonFeedbackQuery = useQuery({
    queryKey: ["feedback", lesson.lessonId],
    queryFn: ({ queryKey }) => fetchLessonFeedback(queryKey[1]),
  });

  const handleClick = () => {
    if (lessonFeedbackQuery.data) {
      setfeedbackData(lessonFeedbackQuery.data);
      setButton("feedback");
    }
  };

  useEffect(() => {
    if (ratingQuery.data) {
      setRating(ratingQuery.data);
    }
  }, [ratingQuery.data]);

  const stars = ["star", "star", "star", "star", "star"];

  return (
    <div className="lesson-container" key={lesson.id}>
      <p className="msg">{lesson.lessonTittle}</p>
      <div className="rating-container">
        {stars.map((star: string, i) => {
          const ratingValue = i + 1;

          return (
            <div className="rating-container" key={i}>
              <FaStar
                className={star}
                color={ratingValue <= rating! ? "#FE5F55" : "gray"}
                size={70}
              />
            </div>
          );
        })}
      </div>
      <button className="lesson-btn" onClick={handleClick}>
        <FaRegMessage size={30} />
        Feedback
      </button>
    </div>
  );
}

export default LessonStat;
