import React from 'react'
import image from '../../assets/arne_laptop.png'
import './WorkContent.css'
const WorkCartArne = () => {
  return (
    <li className='work__list__item'>
    <div className='work__image__wrapper'>
      <img src={image}></img>
    </div>
    <div className='work__info__wrapper'>
      <h2>Arne Quinze</h2>
      <p>This project was carried out as part of an educational assigment from Artevelde Hogeshool</p>
      <button  className='work__info__button'>Preview</button>
      <a className='work__info__link' href="https://pgmgent-2021-atwork1.github.io/atwork-1_project_3-MarynaSoufi/" target="_blank">Visit site</a>
    </div>
  </li>
  )
}

export default WorkCartArne;
