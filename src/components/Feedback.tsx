import { useRef } from "react";
import "../styles/feedback.css";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type props = {
  [key: string]: any;
};

function FeedBack({
  setMessage,
  setType,
  setTitle,
  setSuccess,
  success,
}: props) {
  const addFeedback = async (input: string) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/feedback/add",
        {
          feedback: input,
          lessonId: "eeb8224c-f1fc-4ed1-b92a-969112247860",
        }
      );
      console.log(response.data);
      feedRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };
  success &&
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  const feedRef: any = useRef();

  const feedbackMutation = useMutation({
    mutationFn: (input: string) => {
      return addFeedback(input);
    },
    onSettled: () => {
      setSuccess(true);
      setMessage("Feedback submitted successfully");
      setTitle("Success");
      setType("success");
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    },
    onError: (error: any) => {
      setSuccess(true);
      setMessage("Failed to submit feedback");
      setTitle("Error");
      setType("error");
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      console.error(error);
    },
  });

  return (
    <div className="container">
      <h1>FeedBack</h1>
      <form>
        <textarea
          ref={feedRef}
          className="feedback"
          name="feedback"
          id="feedback"
          cols={30}
          rows={10}
          placeholder="Enter your feedback here..."
        ></textarea>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (feedRef.current.value === "") {
              setSuccess(true);
              setMessage("Please enter your feedback");
              setTitle("Invalid Entry");
              setType("warning");
              return;
            }
            feedbackMutation.mutate(feedRef.current.value);
            feedRef.current.value = "";
            return;
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedBack;
