import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  // if no feedback display something
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack YET!</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
