import React from 'react';
import Specifics from './specifics'
import App from '../App';

const Faq = (props) => {

  return (
    <div className='faq-container'>
      <div className='faq specifics'>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='questions-container'>
          {props.questions.map(question =>
            <div className='single-question'>
              <h3>{question.q}</h3>
              <h5>{question.a}</h5>
            </div>
          )}
        </div>
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Specifics />
    </div>

  )
}

export default Faq;