import { useState } from "react";

// ✅ Form component where user submits feedback
function FeedbackForm({ onAdd }) {
  const [text, setText] = useState("");
  const [type, setType] = useState("Bug");

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // ignore empty input

    const newFeedback = {
      id: Date.now(), // unique id
      text,
      type,
    };

    onAdd(newFeedback); // send feedback to App
    setText(""); // reset input
    setType("Bug"); // reset type
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Share your thoughts
      </h2>

      {/* Feedback text input */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your feedback..."
        className="border border-gray-300 p-3 w-full rounded-md mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
      />

      {/* Feedback type dropdown */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border border-gray-300 p-3 w-full rounded-md mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
      >
        <option>Bug</option>
        <option>Feature</option>
        <option>Improvement</option>
      </select>

      {/* Submit button */}
      <button
        className="bg-purple-600 text-white px-4 py-3 w-full rounded-md font-medium hover:bg-purple-700 transition duration-200"
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;

