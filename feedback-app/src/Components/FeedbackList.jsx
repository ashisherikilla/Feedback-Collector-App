import FeedbackItem from "./FeedbackItem";

// ✅ Shows a list of all feedback items
function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return (
      <p className="text-gray-500 text-center italic">
        No feedback yet. Be the first to share!
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {feedbacks.map((fb) => (
        <FeedbackItem key={fb.id} feedback={fb} />
      ))}
    </ul>
  );
}

export default FeedbackList;
