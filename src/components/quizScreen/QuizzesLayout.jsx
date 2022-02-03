import React, { useEffect, useState } from 'react';
import ShowQuiz from './ShowQuiz'
import Quiz from '../Quiz';
import NotFound from '../NotFound'
import { getQuizzes } from '../../httpPetitions';

const QuizzesLayout = ({ answer, setAnswer, quizzes, setQuizzes }) => {
  const [page, setPage] = useState(0)
  useEffect(() => {
    getQuizzes(setQuizzes)
  }, [])

  return <>
    {quizzes.length === 1 ? <NotFound name='data' /> : (
      <Quiz>{<ShowQuiz quizzes={quizzes} setPage={setPage} page={page} setAnswer={setAnswer} answer={answer} />}</Quiz>
    )}
  </>;
};

export default QuizzesLayout;
