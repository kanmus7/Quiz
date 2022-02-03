import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeScreen from "../components/HomeScreen";
import QuizzesLayout from "../components/quizScreen/QuizzesLayout";
import ResultsLayout from "../components/resultScreen/ResultsLayout"

function App() {
  const [answer, setAnswer] = useState([])
  const [quizzes, setQuizzes] = useState([])
  return (
    <Routes>
      <Route path="/Quiz" element={<HomeScreen setAnswer={setAnswer} />} />
      <Route path="/Quiz/quizzes" element={<QuizzesLayout answer={answer} setAnswer={setAnswer} quizzes={quizzes} setQuizzes={setQuizzes} />} />
      <Route path="/Quiz/results" element={<ResultsLayout quizzes={quizzes} answers={answer} setAnswer={setAnswer} />} />
    </Routes>
  );
}

export default App;
