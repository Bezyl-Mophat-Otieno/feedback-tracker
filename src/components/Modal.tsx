import { useState } from "react";
import "../styles/modal.css"; // Import your CSS styles for the modal
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { FaXmark } from "react-icons/fa6";
import Alert from "./Alert";

import axios from "axios";

type props = {
  [key: string]: any;
};
function Modal({ showModal, closeModal }: props) {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const titleRef: any = useRef();
  const [lessonTitle, setLessonTitle] = useState("");
  const addLessonTitle = async (lessonTitle: string) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/lesson/create",
      {
        lessonTittle: lessonTitle,
      }
    );

    const data = response.data;
    // console.log(data);
    if (data.status == "success") {
      setSuccess(true);
      setMessage("Lesson Added Successfully");
      setTitle("Success");
      setType("success");
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      titleRef.current.value = "";
    } else {
      setSuccess(true);
      setMessage("Something went wrong,lesson not added");
      setTitle("Error");
      setType("error");
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  };

  const addLessonMutation = useMutation({
    mutationFn: (lessonTitle: string) => addLessonTitle(lessonTitle),
  });

  const handleSubmit = (lessonTitle: string) => {
    if (lessonTitle.trim() == "") {
      setSuccess(true);
      setType("warning");
      setTitle("Warning");
      setMessage("Lesson Title cannot be empty");
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } else {
      addLessonMutation.mutate(lessonTitle);
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <FaXmark />
            </span>
            {success && <Alert type={type} title={title} message={message} />}
            <h2>Enter Lesson Title</h2>
            <input
              type="text"
              ref={titleRef}
              placeholder="Lesson Title"
              onChange={() => setLessonTitle(titleRef.current.value)}
              value={lessonTitle}
            />
            <button onClick={() => handleSubmit(lessonTitle)}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
