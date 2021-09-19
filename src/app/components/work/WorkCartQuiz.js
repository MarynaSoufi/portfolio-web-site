import React from 'react'
import './WorkContent.css'
import image from '../../assets/quizlaptop.png'
import './WorkContent.css'
const WorkCartQuiz = ({open}) => {
  return (
    <li className='work__list__item'>
      <div className='work__image__wrapper'>
        <img src={image} alt="logo"></img>
      </div>
      <div className='work__info__wrapper'>
        <h2>Developer Quiz</h2>
        <p>This project was carried out as part of an educational assigment from Artevelde Hogeshool</p>
        <div className='work__buttons-wrapper'>
          
            <button  onClick={open} className='work__info__button'>Preview</button>
         
         
            <a  className='work__info__link' href=" https://pgmgent-pgm-3.github.io/opdracht-1---developer-quiz-MarynaSoufi/" target="_blank">Visit site</a>
          
         
        </div>
        
      </div>
    </li>
   
  )
}

export default WorkCartQuiz;
