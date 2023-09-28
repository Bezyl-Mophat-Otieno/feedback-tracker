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
  lesson,
  setError,
}: props) {
  const handleClick = (input: string, id: string) => {
    if (input.trim() === "") {
      setSuccess(true);
      setMessage("Please enter your feedback");
      setTitle("Invalid Entry");
      setType("warning");
      return;
    }
    feedbackMutation.mutate({ input: input, id: id });
    feedRef.current.value = "";
    return;
  };

  const addFeedback = async (input: string, id: string) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/feedback/add",
        {
          feedback: input,
          lessonId: id,
        }
      );
      console.log(response.data);
      setSuccess(true);
      setMessage("Thank you for your feedback");
      setTitle("Success");
      setType("success");
      feedRef.current.value = "";
    } catch (error: any) {
      setError(true);
      setMessage(error.response.data.message);
      setTitle("Error");
      setType("error");
    }
  };
  success &&
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  const feedRef: any = useRef();

  type Variable = {
    input: string;
    id: string;
  };

  const feedbackMutation = useMutation({
    mutationFn: (variables: Variable) => {
      return addFeedback(variables.input, variables.id);
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
            return handleClick(feedRef.current.value, lesson.lessonId);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedBack;
