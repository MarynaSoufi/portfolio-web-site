import React from 'react'
import image from '../../assets/inova_laptop.png'
import './WorkContent.css'

const WorkCartInova = ({open}) => {
  return (
    <li className='work__list__item'>
    <div className='work__image__wrapper'>
      <img src={image} alt="logo"></img>
    </div>
    <div className='work__info__wrapper'>
      <h2>Inova</h2>
      <p>This project was carried out as part of an educational assigment from Artevelde Hogeshool</p>
      <div className='work__buttons-wrapper'>
        <button onClick={open}  className='work__info__button'>Preview</button>
        <a  className='work__info__link' href=" https://the8gency.github.io/digital-agency-digital-agency/" target="_blank">Visit site</a>
      </div>
      
    </div>
  </li>
  )
}

export default WorkCartInova;
