import React from 'react';
import { Link } from 'react-router-dom';

const ShowQuizzesResult = (props) => {
  const answer = props.answers
  return <section className='resultSection-Container'>
    {props.quizzes.map((quiz, i) => props.render(quiz,i,answer[i]))}
    <Link to="/Quiz/" onClick={()=> props.setAnswers([])}>PLAY AGAIN?</Link>
  </section>;
};

export default ShowQuizzesResult;
