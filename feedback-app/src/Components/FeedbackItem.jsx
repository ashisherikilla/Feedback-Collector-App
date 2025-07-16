// ✅ Shows a single feedback with style based on type
function FeedbackItem({ feedback }) {
  const { text, type } = feedback;

  // color styles depending on feedback type
  const typeStyles = {
    Bug: "bg-red-100 border-red-300 text-red-800",
    Feature: "bg-green-100 border-green-300 text-green-800",
    Improvement: "bg-yellow-100 border-yellow-300 text-yellow-800",
  };

  return (
    <li
      className={`p-4 rounded-lg border shadow-sm ${typeStyles[type]} hover:shadow-md transition duration-150`}
    >
      <div className="font-semibold mb-1">{type}</div>
      <div>{text}</div>
    </li>
  );
}

export default FeedbackItem;

