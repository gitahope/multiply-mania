import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../../library/quizSlice";

const QuDisplay = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, range } = useSelector(
    (state) => state.quiz
  );
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() !== "") {
      dispatch(submitAnswer(Number(answer)));
      setAnswer("");
      setError("");
    } else {
      setError("Answer cannot be empty!");
    }
  };

  if (!currentQuestion) return null; // Handle the case where questions might be empty

  return (
    <div className="sha-page-body vh-100 my-auto overflow-auto p-3">
      <div className="p-3 mt-5 text-center">
        <h4 className="my-5">
          Selected Table Range: {range.from} to {range.to}
        </h4>
        <h5>
          Question {currentQuestionIndex + 1} of {questions.length}
        </h5>
        <h1 className="fw-semibold text-dark display-4 mb-0 py-3">
          {currentQuestion.question}
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`form-control border-0 py-3 ps-3 rounded-4 ${error!==""?"is-invalid":""}`}
          />
          {error!=="" && <span className="invalid-feedback">{error}</span>}
          <button
            type="submit"
            className="btn bg-dark text-white w-100 btn-lg py-3 my-4 rounded-pill"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuDisplay;
