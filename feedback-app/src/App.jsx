import { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";

// ✅ Main app component
function App() {
  // store all feedbacks in an array
  const [feedbacks, setFeedbacks] = useState([]);

  // add new feedback to top of list
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      {/* App container */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-800 drop-shadow-sm">
          📝 Feedback Collector
        </h1>

        {/* Form section */}
        <FeedbackForm onAdd={addFeedback} />

        {/* Feedback list section */}
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}

export default App;
