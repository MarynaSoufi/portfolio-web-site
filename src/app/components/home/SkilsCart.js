import React from 'react'
import './SkilsCart.css'
import SkilList from './SkilList'
const SkilsCart = ({title,  data}) => {
  return (
    <div className="skil__cart">
    <div className="skil__cart__title">
      <p className="skil__cart__title-text">{title}</p>
    </div>
    <ul>
        {data.map((d, index) => <SkilList item={d} key={index}/>)}
    </ul>
   
  </div>
)
  
}

export default SkilsCart;
