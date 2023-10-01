import "../styles/dashboard.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Feed from "../components/Feed";
import LessonStat from "../components/LessonStat";
import Lesson from "../components/Lesson";
import Modal from "../components/Modal";

type Lesson = {
  [key: string]: any;
};

function Dashboard() {
  const [feedbackData, setfeedbackData] = useState<any>([]);
  const [lessonData, setlessonData] = useState<any>([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [button, setButton] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentFeedback, setcurrentFeedback] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const fetchCurrentLesson = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/lesson/current"
      );
      const data = response.data;
      const lesson = data.data;
      return lesson;
    } catch (error: any) {
      setMessage(error.response.data.message);
      setType("error");
      setTitle("Error");
    }
  };

  const currentLessonQuery = useQuery({
    queryKey: ["lesson"],
    queryFn: fetchCurrentLesson,
  });
  currentLessonQuery.isLoading && console.log("Loading...");
  currentLessonQuery.isError && console.log("Error");
  currentLessonQuery.isSuccess && console.log("Success");

  useEffect(() => {
    if (currentLessonQuery.data) {
      setCurrentLesson(currentLessonQuery.data);
    }
  }, [currentLessonQuery.data]);

  const fetchFeedback = async () => {
    const lessonId = currentLesson!.lessonId;
    const response = await axios.get(
      `http://localhost:5000/api/v1/feedback/get/${lessonId}`
    );
    const data = await response.data.data;
    return data;
  };
  const fetchCurrentFeedback = async () => {
    const lessonId = currentLesson!.lessonId;
    const response = await axios.get(
      `http://localhost:5000/api/v1/feedback/current/${lessonId}`
    );
    const data = await response.data.data;
    return data;
  };

  const fetchLesson = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/lesson/fetch"
    );
    const data = await response.data.lessons;
    // console.log(data);
    return data;
  };

  const feedbackQuery = useQuery({
    queryKey: ["feedback"],
    enabled:
      button === ("feedback" || button === null) && currentLesson !== null,
    queryFn: fetchFeedback,
  });
  const currentFeedbackQuery = useQuery({
    queryKey: ["Newfeedback"],
    enabled: button === "notifications" && currentLesson !== null,
    queryFn: fetchCurrentFeedback,
  });
  currentFeedbackQuery.isLoading && console.log("Loading...");
  currentFeedbackQuery.isError && console.log("Error");
  currentFeedbackQuery.isSuccess && console.log("Success");

  const lessonQuery = useQuery({
    queryKey: ["lessons"],
    enabled: button == "lessons",
    queryFn: fetchLesson,
  });

  useEffect(() => {
    if (feedbackQuery.data) {
      setfeedbackData(feedbackQuery.data);
    }
    if (lessonQuery.data) {
      setlessonData(lessonQuery.data);
    }
    if (currentFeedbackQuery.data) {
      setcurrentFeedback(currentFeedbackQuery.data);
      console.log(currentFeedback);
    }
  }, [feedbackQuery.data, lessonQuery.data, currentFeedbackQuery.data]);

  return (
    <div className="dash-container">
      <div className="sidenav">
        <div className="sidenav__header">
          <img src="images/THEjitu.png" alt="" />
        </div>
        <div className="sidenav__links">
          <div className="links-container">
            <button
              className="btn-links"
              onClick={() => setButton("notifications")}
            >
              Notifications
            </button>
            <button
              className="btn-links"
              onClick={() => setButton("statistics")}
            >
              Statistics
            </button>
            <button
              className="btn-links"
              onClick={() => {
                setButton("feedback");
              }}
            >
              Feedback
            </button>
            <button className="btn-links" onClick={() => setButton("ratings")}>
              Ratings
            </button>
            <button
              className="btn-links"
              onClick={() => {
                setButton("lessons");
              }}
            >
              Lessons
            </button>
            <button
              className="btn-links"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Add Lesson
            </button>
          </div>
        </div>
      </div>
      <div className="feedcontainer">
        {button == null && (
          <div className="thank-container">
            <img src="images/admin.jpg" alt="brandImg" />
            <h1 className="thankText">Welcome to Admin's Dashboard</h1>
          </div>
        )}
        {(button == "notifications" || button == null) &&
          currentFeedback.map((feedback: any, index: number) => {
            console.log(feedback);
            return (
              <Feed
                feedback={feedback}
                setTitle={setTitle}
                setType={setType}
                setSuccess={setSuccess}
                setMessage={setMessage}
                key={index}
              />
            );
          })}
        {button == "ratings" && <h1>House Under Construction ...</h1>}
        {button == "statistics" && <h1>House Under Construction ...</h1>}
        {showModal && (
          <Modal
            closeModal={closeModal}
            showModal={showModal}
            type={type}
            title={title}
            message={message}
            setSuccess={setSuccess}
          />
        )}
        {/* <Lesson lesson={currentLesson} /> */}
        {success && (
          <Alert
            type={type}
            title={title}
            message={message}
            setSuccess={setSuccess}
          />
        )}
        {button == "feedback" &&
          feedbackData.map((feedback: any, index: number) => {
            return (
              <Feed
                feedback={feedback}
                setTitle={setTitle}
                setType={setType}
                setSuccess={setSuccess}
                setMessage={setMessage}
                key={index}
              />
            );
          })}
        {button == "lessons" &&
          lessonData.map((lesson: any, i: number) => {
            return (
              <LessonStat
                setfeedbackData={setfeedbackData}
                setButton={setButton}
                key={i}
                lesson={lesson}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Dashboard;
