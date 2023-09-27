import React from "react";
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
}: props) {
  const addRating = async (input: number) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/rating/add",
      {
        rating: input,
        lessonId: "eeb8224c-f1fc-4ed1-b92a-969112247860",
      }
    );
    const data = await response.data;
    console.log(data);
  };

  const ratingMutation = useMutation({
    mutationFn: (input: number) => addRating(input),
  });
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHOver] = useState<number | null>(null);

  const handleClick = (ratingValue: number) => {
    ratingMutation.mutate(ratingValue);
    setSuccess(true);
    setMessage("Thank you for your Rating");
    setType("success");
    setTitle("Rating");
    setRated(true);
  };
  return (
    <div className="container">
      <h1>Rating</h1>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              onClick={() => handleClick(ratingValue)}
              className="star"
              color={ratingValue <= (rating! | hover!) ? "#FE5F55" : "gray"}
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
