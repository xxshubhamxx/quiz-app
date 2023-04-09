import React, { useState } from 'react';
// import SpinningCube from './SpinningCube';
import './App.css';

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "Who is the creator of the 'Harry Potter' series?",
    answers: [
      { text: "Stephenie Meyer", correct: false },
      { text: "Suzanne Collins", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "Veronica Roth", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "African Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Hippopotamus", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the highest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false },
      { text: "Mount Everest", correct: true },
    ],
  },
  // Add more questions here
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleExitButtonClick = () => {
    window.close();
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Results</h2>
          <p>You scored {score} out of {questions.length}.</p>
          <p>
            {score === questions.length
              ? "Congratulations! You got all the questions right!"
              : score >= questions.length / 2
              ? "Well done! You got more than half the questions right."
              : "Oops, you didn't get many questions right."}
          </p>
          <div className="button-section">
            <button onClick={handleRestartButtonClick}>Restart Quiz</button>
            <button onClick={handleExitButtonClick}>Exit App</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer.text}
                onClick={() => handleAnswerButtonClick(answer.correct)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
