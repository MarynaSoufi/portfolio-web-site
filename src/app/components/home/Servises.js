import React from 'react'
import './Servises.css'
import ServisCart from './ServisCart'
import designIcons from '../../assets/design-thinking.svg'
import softwareIcons from '../../assets/programing.svg'
import designData from '../../data/design.json'
import dataSofrware from '../../data/software.json'

const Servises = () => {
  return (
    <div className="container">
      <h2 className="servises__header">What services do I offer?</h2>
      <div className="cart__wrapper">
        <ServisCart src={designIcons} title='Digitale Product Design' alt='icon' data={designData}/>
        <ServisCart src={softwareIcons} title='Sofware Engineering' alt='icon' data={dataSofrware}/>
      </div>
      
    </div>
  )
}

export default Servises;
