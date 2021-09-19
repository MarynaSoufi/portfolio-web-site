import React from 'react'
import image from '../../assets/feest_laptop.png'
import './WorkContent.css'
const WorkCartFeest = ({open}) => {
  return (
    <li className='work__list__item padding'>
    <div className='work__image__wrapper'>
      <img src={image}></img>
    </div>
    <div className='work__info__wrapper'>
      <h2>Gentse Feesten</h2>
      <p>This project was carried out as part of an educational assigment from Artevelde Hogeshool</p>
      <div className='work__buttons-wrapper'>
        <button  onClick={open} className='work__info__button'>Preview</button>
        <a className='work__info__link' href=" https://marynasoufi.github.io/Gentse-Feesten/" target="_blank">Visit site</a>
      </div>
     
    </div>
  </li>
  )
}

export default WorkCartFeest;
