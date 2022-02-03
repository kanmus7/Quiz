import React from 'react';
import Header from '../Header';
import ShowQuizzesResult from './ShowQuizzesResult';
import Quiz from '../Quiz';
import Answers from './Answers';

const ResultsLayout = ({ answers, quizzes, setAnswer }) => {
  let c = 0
  const quizzesAnswers = findQuizzesAnsers(quizzes)
  function findQuizzesAnsers(quizzes) {
    return quizzes.map(quiz => quiz.correct_answer)
  }

  for (let n in quizzesAnswers) {
    if (quizzesAnswers[n] === answers[n]) c = c + 1
  }

  return <>
    <Header title={`You scored ${c + '/' + quizzes.length}`} />
    <Quiz>
      {<ShowQuizzesResult
        quizzes={quizzes}
        answers={answers}
        setAnswer={setAnswer}
        render={(quiz, i, answer) => (
          <Answers
            key={i}
            quiz={quiz}
            answer={answer}
          />
        )}
      />}
    </Quiz>
  </>
};

export default ResultsLayout;
