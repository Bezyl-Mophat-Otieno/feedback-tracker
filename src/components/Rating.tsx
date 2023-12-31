import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../styles/rating.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type props = {
  [key: string]: any;
};

function Rating({
  setMessage,
  setType,
  setRated,
  setSuccess,
  setTitle,
  lesson,
}: props) {
  const addRating = async (input: number, id: string) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/rating/add",
      {
        rating: input,
        lessonId: id,
      }
    );
    const data = await response.data;
    // console.log(data);
  };

  type Variable = {
    input: number;
    id: string;
  };

  const ratingMutation = useMutation({
    mutationFn: (variables: Variable) =>
      addRating(variables.input, variables.id),
  });
  const [hover, setHOver] = useState<number | null>(null);

  const handleClick = (ratingValue: number, id: string) => {
    ratingMutation.mutate({ input: ratingValue, id: id });
    setSuccess(true);
    setMessage("Thank you for your Rating");
    setType("success");
    setTitle("Rating");
    setRated(true);
  };
  const stars = ["star", "star", "star", "star", "star"];

  return (
    <div className="container">
      <h1>Rating</h1>
      {stars.map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              onClick={() => handleClick(ratingValue, lesson.lessonId)}
              className={star}
              color={ratingValue <= hover! ? "#FE5F55" : "gray"}
              size={70}
              onMouseEnter={() => setHOver(ratingValue)}
              onMouseLeave={() => setHOver(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
