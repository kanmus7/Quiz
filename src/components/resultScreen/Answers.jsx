import React, { useState } from 'react';
import '../../styles/Answers.css'
import add from '../../images/add.png'
import minus from '../../images/minus.png'

const Answers = ({ quiz, answer }) => {
  const [showAnswerInfo, setShowAnswerInfo] = useState(false)
  return <div className='quizCardResult-Container'>
    <div className='title-Container' onClick={() => setShowAnswerInfo(!showAnswerInfo)}>
      <img src={!showAnswerInfo ? add : minus} alt="img" />
      <h1>{quiz.question}</h1>
    </div>
    <ul className={showAnswerInfo ? 'list' : ''}>
      <li>{`Correct answer: ${quiz.correct_answer}`}</li>
      {<li>{`Your answer: ${answer}`}</li>}
    </ul>
  </div>;
};

export default Answers;
