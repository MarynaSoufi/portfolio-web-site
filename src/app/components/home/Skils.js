import React from 'react';
import './Skils.css';
import dataFront from '../../data/frontend.json';
import dataBack from '../../data/backend.json';
import dataGeneral from '../../data/general.json';
import SkilsCart from './SkilsCart.js'
const Skils = () => {
  return (
    <div className="container">
    <h2 className="skils__header">Which technologies do I know?</h2>
    <div className="cart__wrapper">
      {/* <ServisCart src={designIcons} title='Digitale Product Design' alt='icon' data={designData}/>
      <ServisCart src={softwareIcons} title='Sofware Engineering' alt='icon' data={dataSofrware}/> */}
      <SkilsCart title='FRONT-END'  data={dataFront}/>
      <SkilsCart title='BACK-END' data={dataBack}/>
      <SkilsCart title='GENERAL' data={dataGeneral}/>
    </div>
    
  </div>
  )
}

export default Skils;
