import React from 'react'
import './WorkContent.css'
import WorkCartQuiz from './WorkCartQuiz'
import WorkCartArne from './WorkCartArne'
import WorkCartInova from './WorkCartInova'
import WorkCartFeest from './WorkCartFeest'
const WorkContent = () => {
  return (
    <div className="container">
      <h2 className='work__text'>My Recent Work</h2>
      <ul className='work__list'>
        <WorkCartQuiz/>
        <WorkCartArne/>
        <WorkCartInova/>
        <WorkCartFeest/>
      </ul>
      
    </div>
  )
}

export default WorkContent;
