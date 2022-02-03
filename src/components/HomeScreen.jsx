import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../styles/GeneralStyle.css'

const HomeScreen = () => {
  return <>
            <Header title='Welcome to the Trivia Challenge!'/>
            <section className='section-container'>                
                <p className='info'> You will be presented with 10 True or False questions.</p>
                <p> Can you score 100%?</p>
            </section>
            <Link className='begin-ref' to='/Quiz/quizzes'>BEGIN</Link>
        </>;
};

export default HomeScreen;
