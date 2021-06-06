import React, { useState } from 'react'
import './WorkContent.css'
import WorkCartQuiz from './WorkCartQuiz'
import WorkCartArne from './WorkCartArne'
import WorkCartInova from './WorkCartInova'
import WorkCartFeest from './WorkCartFeest'
import Quiz from './Quiz'
import Arne from './Arne'
import Inova from './Inova'
import Feest from './Feest'
const WorkContent = () => {
  const [quiz, setQuiz] = useState(false);
  const [arne, setArne] = useState(false);
  const [inova, setInova] = useState(false);
  const [feest, setFeest] = useState(false);

  const quizzi = () => {
    setQuiz(!quiz);
  }

  const arnee = () => {
    setArne(!arne);
  }
  const inovaa = () => {
      setInova(!inova)
  }

  const festee = () => {
    setFeest(!feest)
}
  return (
    <div className="container">
      <h2 className='work__text'>My Recent Work</h2>
      <ul className='work__list'>
        <WorkCartQuiz open={quizzi}/>
        <WorkCartArne open={arnee}/>
        <WorkCartInova open={inovaa}/>
        <WorkCartFeest open={festee}/>
        <Quiz closed={quizzi} state={quiz}/>
        <Arne closed={arnee} state={arne}/>
        <Inova closed={inovaa} state={inova}/>
        <Feest closed={festee} state={feest}/>
      </ul>
      
    </div>
  )
}

export default WorkContent;
