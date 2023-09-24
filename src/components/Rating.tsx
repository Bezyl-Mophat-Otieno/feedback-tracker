import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../styles/rating.css";

function Rating() {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHOver] = useState<number | null>(null);
  return (
    <div className="container">
      <h1>Rating</h1>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              onClick={() => setRating(ratingValue)}
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
