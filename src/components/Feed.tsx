import React, { useState } from "react";
import "../styles/feed.css";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
type props = {
  [key: string]: any;
};

type Variable = {
  id: string;
};

function Feed({ feedback, setMessage, setSuccess, setTitle, setType }: props) {
  const [serviced, setServiced] = useState(feedback.serviced);
  const serviceFeedback = async (id: string) => {
    console.log(id);
    try {
      const response = await axios.put(
        "http://localhost:5000/api/v1/feedback/service",
        {
          id,
        }
      );
      const data = response.data;
      console.log(data);
      if (data.message == "Feedback serviced successfully") {
        setServiced(true);
        setSuccess(true);
        setMessage(data.message);
        setTitle("Success");
        setType("success");
      } else {
        setSuccess(true);
        setMessage(data.message);
        setTitle("Warning");
        setType("warning");
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  const serviceMutation = useMutation({
    mutationFn: (variables: Variable) => serviceFeedback(variables.id),
  });

  return (
    <div>
      <div className="msg-container">
        <p className="msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          suscipit reiciendis ea esse nemo labore ipsum dignissimos atque
          deleniti necessitatibus, numquam voluptates voluptatum illum,
          praesentium pariatur? Saepe commodi ut necessitatibus!
        </p>
        <button
          className={serviced ? "msg-btn-serviced" : "msg-btn"}
          onClick={() => serviceMutation.mutate({ id: feedback.id })}
        >
          {serviced ? "Serviced" : "Service"}
        </button>
      </div>
    </div>
  );
}

export default Feed;