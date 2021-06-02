import React from 'react'
import './WorkContent.css'
import WorkCart from './WorkCart'
import info from '../../data/work.json'
const WorkContent = () => {
  return (
    <div className="container">
      <h2 className='work__text'>My Recent Work</h2>
      <ul className='work__list'>
        {info.map((i, index) => <WorkCart key={index} data={i}/>)}
      </ul>
      
    </div>
  )
}

export default WorkContent;
