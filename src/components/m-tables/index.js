import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateQuestions,
  resetQuiz,
} from "../../library/quizSlice";
import Wrapper from "../layouts";
import QuGenerate from "./QuGenerate";
import QuDisplay from "./QuDisplay";
import QuFinish from "./QuFinish";

function TablesApp() {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score, isQuizRunning } = useSelector(
    (state) => state.quiz
  );
  const [numQuestions, setNumQuestions] = useState(10); // Default number of questions
  const [startTable, setStartTable] = useState(2);
  const [endTable, setEndTable] = useState(15);

  const handleGenerateQuestions = () => {
    dispatch(generateQuestions({ numQuestions, startTable, endTable }));
  };

  const handleResetQuiz = () => {
    dispatch(resetQuiz());
    setNumQuestions(10); // Reset to default
    setStartTable(2);
    setEndTable(15);
  };

  return (
    <Wrapper>
      <>
        {!isQuizRunning && currentQuestionIndex===0 ? (
          <QuGenerate
            numQuestions={numQuestions}
            setNumQuestions={setNumQuestions}
            startTable={startTable}
            setStartTable={setStartTable}
            endTable={endTable}
            setEndTable={setEndTable}
            onGenerate={handleGenerateQuestions}
          />
        ) : null}

        {isQuizRunning && questions.length > 0 ? <QuDisplay /> : null}

        {questions.length > 0 &&
          !isQuizRunning && ( // Show score only after quiz ends
            <QuFinish
                score={score}
                questions={questions.length}
                action={handleResetQuiz}
            />
            // <div>
            //   <h2>Quiz Finished!</h2>
            //   <p>
            //     Your final score: {score} / {questions.length}
            //   </p>
            //   <button onClick={handleResetQuiz}>Restart Quiz</button>
            // </div>
          )}
      </>
    </Wrapper>
  );
}

export default TablesApp;
