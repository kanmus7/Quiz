import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import '../../styles/Quiz.css'

const ShowQuiz = ({ quizzes, page, setPage, setAnswer, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const navigate = useNavigate()

  function handleValues(target) {
    setAnswer([...answer, target.value])
    if (page === 9) {
      navigate('/Quiz/results')
    }
    setPage(page + 1)
  }

  const ShowOptions = () => (
    <div className='showOptions-Container'>
      <input className='answerOption' type='button' value='True' onClick={(e) => handleValues(e.target)} />
      <input className='answerOption' type='button' value='False' onClick={(e) => handleValues(e.target)} />
    </div>
  )


  return <>
    {quizzes.length === 0 ? 'Waiting for data' : (
      <>
        <Header title={quizzes[page].category} />
        <section className='quiz section-container' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <ShowOptions /> : <p>{quizzes[page].question}</p>}
        </section>
        <p className='listQuestions'>{`${page + 1} of ${quizzes.length}`}</p>
      </>
    )}

  </>;
};

export default ShowQuiz;
