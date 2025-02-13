import { createSlice } from "@reduxjs/toolkit";

const generateMathQuestions = ({ numQuestions, startTable, endTable }) => {
  const questions = [];
  for (let i = 0; i < numQuestions; i++) {
    const table =
      Math.floor(Math.random() * (endTable - startTable + 1)) + startTable;
    const multiplier = Math.floor(Math.random() * 10) + 1; // Multiplier from 1 to 10
    const question = `${table} x ${multiplier} = ?`;
    const correctAnswer = table * multiplier;
    questions.push({ question, correctAnswer });
  }
  return questions;
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    range: {
      from: 2,
      to: 15,
    },
    quizStart: false,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    isQuizRunning: false,
  },
  reducers: {
    startQuiz: (state, action) => {
      state.quizStart = action.payload;
    },
    generateQuestions: (state, action) => {
      const { numQuestions, startTable, endTable } = action.payload;
      state.questions = generateMathQuestions({
        numQuestions,
        startTable,
        endTable,
      });
      state.range.from = startTable;
      state.range.to = endTable;
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isQuizRunning = true;
    },
    submitAnswer: (state, action) => {
      const userAnswer = action.payload;
      const correctAnswer =
        state.questions[state.currentQuestionIndex].correctAnswer;
      if (userAnswer === correctAnswer) {
        state.score++;
      }
      state.currentQuestionIndex++;
      if (state.currentQuestionIndex === state.questions.length) {
        state.isQuizRunning = false; // Quiz finished
      }
    },
    resetQuiz: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isQuizRunning = false;
    },
  },
});

export const {
  updateRange,
  startQuiz,
  generateQuestions,
  submitAnswer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
