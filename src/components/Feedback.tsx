import "../styles/feedback.css";
function FeedBack() {
  return (
    <div className="container">
      <h1>FeedBack</h1>
      <textarea
        className="feedback"
        name="feedback"
        id="feedback"
        cols={30}
        rows={10}
        placeholder="Enter your feedback here..."
      ></textarea>
    </div>
  );
}

export default FeedBack;
