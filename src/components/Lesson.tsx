import "../styles/lesson.css";

type props = {
  [key: string]: any;
};
function Lesson({ lesson }: props) {
  return (
    <div className="lesson">
      {lesson === null ? "Loading..." : lesson.lessonTittle}
    </div>
  );
}

export default Lesson;
