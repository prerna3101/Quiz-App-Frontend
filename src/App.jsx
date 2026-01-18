import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correctAnswer: 3
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: 1
  },
  {
    question: "Which keyword is used to create a constant in JS?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container">
      <h2>Quiz Application</h2>

      {showResult ? (
        <div className="result">
          <h3>Quiz Completed 🎉</h3>
          <p>
            Your Score: <strong>{score}</strong> / {questions.length}
          </p>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz">
          <h4>
            Question {currentQuestion + 1} / {questions.length}
          </h4>
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              {option}
            </label>
          ))}

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
